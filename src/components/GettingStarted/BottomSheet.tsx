import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
export default function BottomSheet() {
  return (
    <div className="absolute bottom-0 left-0 grid w-full place-content-center p-3">
      <div className="prose w-full min-w-0 rounded-3xl bg-accent p-6 text-center md:max-w-md">
        <h2>
          Bring <span className="text-red-500">Free</span> streaming to <br />
          Your Devices
        </h2>

        <p className="mt-0">
          Unleash a world of limitless entertainment,
          <br />
          Watch everything and everywhere.
        </p>
        <div className="flex justify-center pl-2">
          <SplideSlide className="hover:text-white"></SplideSlide>
          <SplideSlide className="hover:text-white"></SplideSlide>
          <SplideSlide className="hover:text-white "></SplideSlide>
        </div>
        <Link to="/">
          <button className="btn btn-primary w-full">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
