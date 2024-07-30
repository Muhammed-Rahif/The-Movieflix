import { IconButton } from "@material-tailwind/react";
import { useCallback, useRef } from "react";

type Props = {
  title: string;
};

export default function CardsList({ title }: Props) {
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
    <div className="prose prose-invert relative max-w-none overflow-visible">
      <h3 className="relative mx-4 my-1 font-medium xl:mx-6">{title}</h3>

      <div
        ref={scrollableRef}
        className="flex gap-3 overflow-y-hidden overflow-x-scroll px-4 xl:px-6"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="aspect-3/4 min-w-28 cursor-pointer overflow-clip rounded-xl border-2 border-transparent bg-accent bg-cover bg-center bg-no-repeat duration-200 hover:border-primary active:scale-95 active:border-primary sm:min-w-32 md:aspect-video md:min-w-52 lg:min-w-56 xl:min-w-60 2xl:max-w-80"
            style={{
              backgroundImage: `url('https://picsum.photos/300/200?id=${i}')`,
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
