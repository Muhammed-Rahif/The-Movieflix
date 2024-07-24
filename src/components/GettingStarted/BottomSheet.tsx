import { Button } from "@material-tailwind/react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

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
const splideOptions: Options = {
  perPage: 1,
  arrows: false,
  classes: {
    pagination: "splide__pagination relative my-1",
  },
  type: "loop",
  autoplay: "pause",
};

export default function BottomSheet() {
  return (
    <div className="absolute bottom-0 left-0 z-10 grid w-full place-content-center p-3 shadow-sm">
      <div className="w-full min-w-0 max-w-md rounded-3xl bg-accent p-6 text-center">
        <h2 className="my-0">{title}</h2>

        <Splide options={splideOptions} aria-label="Features of Movieflix">
          {features.map((feat, i) => (
            <SplideSlide data-splide-interval="1000" key={i}>
              <p className="mt-1">{feat}</p>
            </SplideSlide>
          ))}
        </Splide>

        <Link to="/login">
          <Button className="w-full">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
