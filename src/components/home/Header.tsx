import { Carousel } from "@material-tailwind/react";
import { movieData } from "./SampleData";

function Header() {
  return (
    <div className="screen  w-full">
      <div className="flex items-center overflow-y-hidden overflow-x-scroll">
        <Carousel
          transition={{ duration: 2 }}
          loop={true}
          navigation={null} // Remove the dots
          autoplay={true} // Disable autoplay
          className="rounded-xl"
        >
          {movieData.map((item, i) => (
            <div key={i} className="h-80 min-w-96 rounded-xl p-4">
              <img
                src={item.img}
                alt={`Movie ${i}`}
                className="m-0 h-full w-full rounded-md object-cover object-center"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Header;
