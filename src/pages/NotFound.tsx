import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/404.png')`,
      }}
      className="prose prose-invert absolute left-0 top-0 flex h-full w-screen max-w-none flex-col items-center justify-center bg-cover bg-no-repeat [text-shadow:0px_0px_10px_rgba(0,0,0,1)] prose-p:text-white"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1>Lost your way?</h1>

        <p className="lead">
          Sorry, we can't find that page. <br /> You'll find lots to explore on
          the home page.
        </p>

        <Link to="/">
          <Button className="bg-white font-semibold text-black">
            Movieflix Home
          </Button>
        </Link>
      </div>

      <p className="border-l-4 border-l-primary px-5 py-2 text-xl font-thin tracking-widest">
        Error Code - <span className="tracking-normal">404</span>
      </p>
    </div>
  );
}

export default NotFound;
