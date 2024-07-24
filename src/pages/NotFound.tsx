import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-pattern prose prose-invert flex h-full max-w-none flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1>Lost your way?</h1>

        <p className="lead">
          Sorry, we can't find that page. <br /> You'll find lots to explore on
          the home page.
        </p>

        <div>
          <Link to="/">
            <Button className="bg-white font-semibold text-black">
              Movieflix Home
            </Button>
          </Link>
        </div>
      </div>

      <p className="border-l-4 border-l-primary px-5 py-2 text-xl font-thin tracking-widest">
        Error Code - <span className="tracking-normal">404</span>
      </p>
    </div>
  );
}

export default NotFound;
