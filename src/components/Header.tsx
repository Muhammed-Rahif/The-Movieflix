import { Link } from "react-router-dom";

export default function Header() {
  return (
    <article className="flex h-screen w-full flex-col items-start justify-center">
      <h1 className="text-primary">Movieflix</h1>
      <h4 className="underline decoration-primary underline-offset-8">
        An app for movies/series.
      </h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        blanditiis in tempora quos voluptatibus ipsam non obcaecati dicta
        excepturi quisquam, dolores, vitae unde quis optio, itaque ad
        consequatur soluta natus.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Link to="/explore">
          <button className="btn btn-primary">Explore</button>
        </Link>
        <Link to="/enjoy">
          <button className="btn btn-secondary">Enjoy</button>
        </Link>
      </div>
    </article>
  );
}
