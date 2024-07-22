import { useMemo } from "react";
import AnimatedTapes from "../components/GettingStarted/AnimatedTapes";
import BottomSheet from "../components/GettingStarted/BottomSheet";
import { useWindowSize } from "@uidotdev/usehooks";
import LogoText from "../components/LogoText";
import { useQuery } from "@tanstack/react-query";
import { getTrendingAll } from "../api/trending";
import { getImgUrl } from "../api/utils";

export default function GettingStarted() {
  const size = useWindowSize();
  const tapesCount: number = useMemo(
    () => Math.round((size.height ?? window.innerHeight) / 144) - 1,
    [size.height],
  );
  const trendingAll = useQuery({
    queryKey: ["getTrendingAll"],
    queryFn: () => getTrendingAll(),
  });
  const imgUrls = useMemo(
    () =>
      trendingAll.data?.results.map((d) => getImgUrl(d.backdrop_path, "w92")) ??
      [],
    [trendingAll.data],
  );

  return (
    <div id="getting-started" className="h-full overflow-hidden">
      <LogoText className="absolute left-1/2 top-4 z-20 -translate-x-1/2" />

      <div className="absolute left-0 top-0 z-10 h-[30vh] w-screen bg-gradient-to-b from-black to-transparent" />

      <div className="absolute left-0 h-full w-screen overflow-hidden">
        {[...Array(tapesCount)].map((_, i) => (
          <AnimatedTapes
            className="odd:rotate-[5deg] even:-rotate-[5deg] even:-scale-x-100 sm:odd:rotate-[4deg] sm:even:-rotate-[4deg] md:odd:rotate-3 md:even:-rotate-3"
            key={i}
            imgUrls={imgUrls}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-10 h-[70vh] w-full bg-gradient-to-t from-black via-black/90 to-transparent" />
      <BottomSheet />
    </div>
  );
}
