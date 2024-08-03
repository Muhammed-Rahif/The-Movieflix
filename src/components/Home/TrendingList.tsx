import { IconButton } from "@material-tailwind/react";
import { useCallback, useRef } from "react";

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

  return (
    <div className="relative max-w-none overflow-visible">
      <div className="prose prose-invert mx-4 mb-2 xl:mx-6">
        <h3 className="relative m-0 mb-1 font-medium leading-4">Trending</h3>
        <figcaption className="leading-4">Movies</figcaption>
      </div>

      <div
        ref={scrollableRef}
        className="flex gap-3 overflow-y-hidden overflow-x-scroll px-4 xl:px-6"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="aspect-3/4 h-40 cursor-pointer overflow-clip rounded-xl border-2 border-transparent bg-accent bg-cover bg-center bg-no-repeat duration-300 hover:aspect-video hover:border-primary active:scale-95 active:border-primary md:h-44 lg:h-48"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/vchDkX1DtqTy3bIDJ7YqmSbX965.jpg')`,
            }}
          ></div>
        ))}
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
