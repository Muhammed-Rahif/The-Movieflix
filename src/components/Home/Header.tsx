import { Carousel, IconButton } from "@material-tailwind/react";
import HeaderCard from "./HeaderCard";

function Header() {
  return (
    <div className="h-[50vh] min-h-80 overflow-y-visible md:h-[60vh] xl:h-[65vh]">
      <Carousel
        transition={{ ease: "easeOut", duration: 0.5 }}
        loop
        autoplay
        className="absolute left-0 h-[50vh] min-h-80 w-screen overflow-x-clip rounded-b-xl md:h-[60vh] xl:h-[65vh]"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-4 left-4 z-10"
          >
            <i className="eva eva-arrow-ios-back text-3xl" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 bottom-4 z-10"
          >
            <i className="eva eva-arrow-ios-forward text-3xl" />
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute -bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
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
        {[...Array(6)].map((_, i) => (
          <HeaderCard key={i} />
        ))}
      </Carousel>
    </div>
  );
}

export default Header;
