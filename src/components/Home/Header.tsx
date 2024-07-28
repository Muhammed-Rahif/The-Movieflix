import { Carousel } from "@material-tailwind/react";
import { movieData } from "./SampleData";

function Header() {
  return (
    <div className="h-48">
      <div className="absolute left-0 w-screen px-4">
        <div className="flex items-center">
          <Carousel
            transition={{ duration: 2 }}
            loop
            autoplay
            className="h-full rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute -bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {movieData.map((item, i) => (
              <div
                key={i}
                className="h-48 rounded-xl bg-red-700 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.img})` }}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Header;
