import { Button, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const title = (
  <>
    Bring <span className="text-primary">Free</span> streaming to <br />
    Your Devices
  </>
);
const features = [
  "Unleash a world of limitless entertaiment,watch everything and everywhere",
  "Movieflix Original content production investment in creating high-quality series and movies trailer.",
  "Multiple Device Access Availabilty on smartphones,tablet,smart TVs etc.",
];

export default function BottomSheet() {
  return (
    <div className="absolute bottom-0 left-0 z-10 grid w-full place-content-center p-3 shadow-sm">
      <div className="w-full min-w-0 max-w-md rounded-3xl bg-accent p-6 text-center">
        <h2 className="my-0">{title}</h2>

        <Carousel
          autoplay
          aria-label="Features of Movieflix"
          prevArrow={() => <></>}
          nextArrow={() => <></>}
          className="h-auto"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-3 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
          {features.map((feat, i) => (
            <p key={i} className="mt-1">
              {feat}
            </p>
          ))}
        </Carousel>

        <Link to="/login">
          <Button className="w-full">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
