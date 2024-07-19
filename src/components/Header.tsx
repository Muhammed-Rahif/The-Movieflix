export default function Header() {
  return (
    <article className="prose">
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
        <button className="btn btn-primary">Explore</button>
        <button className="btn btn-secondary">Enjoy</button>
      </div>
    </article>
  );
}
