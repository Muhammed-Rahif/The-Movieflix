import HeaderCard from "./HeaderCard";
import { useQuery } from "@tanstack/react-query";
import { Trending } from "../../api/trending";
import { useMemo, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { MediaType } from "../../api/trending.d";
import { IconButton } from "@material-tailwind/react";

function Header() {
  const [activeIndx, setActiveIndx] = useState(0);
  const { data: trendingAll } = useQuery({
    queryKey: ["Trending.getAll"],
    queryFn: () => Trending.getAll(),
  });
  const activeTrend = useMemo(
    () => trendingAll?.results[activeIndx],
    [activeIndx, trendingAll?.results],
  );
  useInterval(
    () => setActiveIndx((activeIndx + 1) % (trendingAll?.results.length || 1)),
    6000,
  );

  return (
    <div className="relative left-0 h-[70vh] min-h-80 w-screen overflow-x-clip rounded-b-xl">
      <HeaderCard
        mediaType={activeTrend?.media_type ?? MediaType.Movie}
        id={activeTrend?.id ?? 0}
      />

      <div className="absolute bottom-4 z-10 hidden w-full items-center justify-between px-5 md:flex">
        <IconButton
          onClick={() => setActiveIndx(activeIndx - 1)}
          className="bg-accent"
        >
          <i className="eva eva-arrow-ios-back text-3xl" />
        </IconButton>
        <IconButton
          onClick={() => setActiveIndx(activeIndx + 1)}
          className="bg-accent"
        >
          <i className="eva eva-arrow-ios-forward text-3xl" />
        </IconButton>
      </div>

      <div className="absolute bottom-2 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center gap-2">
        {[...Array(trendingAll?.results.length)].map((_, i) => (
          <span
            key={i}
            className={`block h-[5px] w-[5px] cursor-pointer rounded-2xl transition-all duration-300 content-[''] first:scale-50 last:scale-50 ${
              activeIndx === i ? "!scale-100 bg-primary" : "bg-white"
            }`}
            onClick={() => setActiveIndx(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
