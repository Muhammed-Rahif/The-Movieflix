import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="pros">
      <div className="mt-24 flex justify-center text-4xl md:text-7xl">
        Lost your way?
      </div>
      <p className="mx-7 mt-8 flex justify-center md:mx-0">
        Sorry,we can't find that page.You'll find lots to explore on the home
        page.
      </p>
      <div className="mt-10 flex justify-center">
        <Link to="/">
          <Button className="w-full bg-white font-semibold text-black">
            MovieFlix Home
          </Button>
        </Link>
      </div>
      <div className="mt-8 flex pl-12 md:ml-72 md:pl-14">
        <p className="mt-4 h-[75px] w-[4px] bg-primary md:ml-20 md:mt-10 md:h-20 md:w-[6px]"></p>
        <p className="pl-10 pt-4 text-xl font-thin tracking-widest text-gray-400 md:pt-6 md:text-3xl">
          Error Code - <span className="tracking-normal text-white">404</span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
