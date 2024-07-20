import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const title = (
  <>
    Bring <span className="text-red-500">Free</span> streaming to <br />
    Your Devices
  </>
);
const features = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, id.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, id.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, id.",
];
const splideOptions = {
  perPage: 1,
  arrows: false,
  classes: {
    pagination: "splide__pagination relative my-1",
  },
};

export default function BottomSheet() {
  return (
    <div className="absolute bottom-0 left-0 grid w-full place-content-center p-3">
      <div className="prose w-full min-w-0 rounded-3xl bg-accent p-6 text-center md:max-w-md">
        <h2 className="mb-0">{title}</h2>

        <Splide options={splideOptions} aria-label="Features of Movieflix">
          {features.map((feat) => (
            <SplideSlide>
              <p className="mt-1">{feat}</p>
            </SplideSlide>
          ))}
        </Splide>

        <button className="btn btn-primary w-full">Get Started</button>
      </div>
    </div>
  );
}
