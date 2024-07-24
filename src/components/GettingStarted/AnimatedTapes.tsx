import { useWindowSize } from "@uidotdev/usehooks";
import { useMemo } from "react";

function AnimatedTapes({ className }: { className?: string }) {
  const size = useWindowSize();

  const cardsCount = useMemo(
    () => Math.round((size.width ?? window.innerWidth) / 60),
    [size.width],
  );

  return (
    <div
      className={`relative left-0 flex h-36 w-full scale-105 items-center overflow-x-hidden bg-accent shadow-[0px_0px_18px_0px_rgba(0,0,0,1)] ${className}`}
    >
      <div className="pattern absolute top-0 h-8 w-full bg-[url('assets/rounded-rect.png')] bg-center bg-repeat-x"></div>

      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(cardsCount)].map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/80/80?id=${i}`}
            className="mr-3 h-16 w-16 min-w-16 rounded-xl bg-[#444]"
          />
        ))}
      </div>

      <div className="animate-marquee2 absolute flex whitespace-nowrap">
        {[...Array(cardsCount)].map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/80/80?id=${i}`}
            className="mr-3 h-16 w-16 min-w-16 rounded-xl bg-[#444]"
          />
        ))}
      </div>

      <div className="pattern absolute bottom-0 h-8 w-full bg-[url('assets/rounded-rect.png')] bg-center bg-repeat-x"></div>
    </div>
  );
}

export default AnimatedTapes;
