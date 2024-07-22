import { useMemo } from "react";
import { shuffleArray } from "../../utils/utils";

function AnimatedTapes({
  className,
  imgUrls,
}: {
  className?: string;
  imgUrls: string[];
}) {
  const imgUrlsShuffle = useMemo(() => shuffleArray(imgUrls), [imgUrls]);

  return (
    <div
      className={`relative left-0 flex h-36 w-full scale-105 items-center overflow-x-hidden bg-accent shadow-[0px_0px_18px_0px_rgba(0,0,0,1)] ${className}`}
    >
      <div className="pattern absolute top-0 h-8 w-full bg-[url('assets/rounded-rect.png')] bg-center bg-repeat-x"></div>

      <div className="flex animate-marquee whitespace-nowrap">
        {imgUrlsShuffle.map((u, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${u})` }}
            className="mr-3 h-16 w-16 min-w-16 rounded-xl bg-[#444] bg-cover bg-center bg-no-repeat"
          />
        ))}
      </div>

      <div className="absolute flex animate-marquee2 whitespace-nowrap">
        {imgUrlsShuffle.map((u, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${u})` }}
            className="mr-3 h-16 w-16 min-w-16 rounded-xl bg-[#444] bg-cover bg-center bg-no-repeat"
          />
        ))}
      </div>

      <div className="pattern absolute bottom-0 h-8 w-full bg-[url('assets/rounded-rect.png')] bg-center bg-repeat-x"></div>
    </div>
  );
}

export default AnimatedTapes;
