import { Button, ButtonGroup, IconButton } from "@material-tailwind/react";
import { useCallback, useRef, useState } from "react";
import { TimeWindow } from "../../api/trending.d";
import { useQuery } from "@tanstack/react-query";
import { Trending } from "../../api/trending";
import { Utils } from "../../api/utils";

export default function TrendingList() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const scrollBy = useCallback(
    (to: "left" | "right") => {
      scrollableRef.current?.scrollBy({
        left: to == "right" ? 250 : -250,
        behavior: "smooth",
      });
    },
    [scrollableRef],
  );
  const [timeWindow, setTimeWindow] = useState<TimeWindow>(TimeWindow.Day);
  const { data: trendingAll } = useQuery({
    queryKey: ["Trending.getAll"],
    queryFn: () => Trending.getAll(),
  });

  return (
    <div className="relative my-3 max-w-none overflow-visible">
      <div className="prose prose-invert mx-4 mb-2 mr-3 flex max-w-none items-center justify-between xl:mx-6 xl:mr-5">
        <div className="">
          <h3 className="relative m-0 mb-1 font-medium leading-4">Trending</h3>
          <figcaption className="leading-4">
            {timeWindow == TimeWindow.Day ? "Today" : "This Week"}
          </figcaption>
        </div>
        <div className="flex gap-2">
          <ButtonGroup>
            {[TimeWindow.Day, TimeWindow.Week].map((i) => (
              <Button
                size="sm"
                color={timeWindow === i ? "red" : "gray"}
                className={`${timeWindow === i ? "bg-primary text-white" : ""} min-[320px]:text-center max-[600px]:bg-sky-300 min-w-max px-2 py-1 text-[10px]`}
                onClick={() => setTimeWindow(i)}
                key={i}
              >
                {i == TimeWindow.Day ? "Today" : "This Week"}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>

      <div
        ref={scrollableRef}
        className="flex gap-3 overflow-y-hidden overflow-x-scroll px-4 xl:px-6"
      >
        {trendingAll?.results.map(
          (
            {
              overview,
              original_title,
              backdrop_path,
              poster_path,
              original_name,
              vote_average,
              media_type,
            },
            i,
          ) => (
            <div
              key={i}
              className="group relative flex aspect-3/4 h-40 cursor-pointer flex-col items-start justify-between overflow-clip rounded-xl border-2 border-transparent bg-accent bg-cover bg-center bg-no-repeat bg-origin-border px-2 py-1 pb-2 duration-500 hover:aspect-video hover:border-primary active:scale-95 active:border-primary md:h-44 lg:h-48"
              style={{
                backgroundImage: `url('${Utils.getImgUrl(backdrop_path ?? poster_path ?? "", { isSmaller: true })}')`,
              }}
              role="link"
            >
              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent opacity-0 duration-300 group-hover:opacity-100"></div>

              <div className="flex w-full items-start justify-between leading-3 opacity-0 duration-300 group-hover:opacity-100">
                <p className="my-0 rounded bg-base-100/40 p-0.5 text-xs capitalize">
                  {media_type}
                </p>

                <p className="my-0 flex items-center justify-center gap-1 text-sm text-yellow-400">
                  {vote_average.toFixed(1)}
                  <i className="eva eva-star" />
                </p>
              </div>

              <div className="relative w-full opacity-0 duration-300 group-hover:to-transparent group-hover:opacity-100">
                <h4 className="m-0 w-full truncate">
                  {original_title ?? original_name}
                </h4>
                <p className="m-0 w-full truncate text-sm">{overview}</p>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="absolute bottom-0 right-4 hidden translate-y-1/3 gap-2 md:flex">
        <IconButton
          size="sm"
          className="bg-accent"
          onClick={() => scrollBy("left")}
        >
          <i className="eva eva-arrow-ios-back text-3xl" />
        </IconButton>
        <IconButton
          size="sm"
          className="bg-accent"
          onClick={() => scrollBy("right")}
        >
          <i className="eva eva-arrow-ios-forward text-3xl" />
        </IconButton>
      </div>
    </div>
  );
}
