import { movieData } from "./SampleData";

function ActionMovies() {
  return (
    <div className="prose prose-invert">
      <h3 className="m-0">Actions</h3>
      <div className="flex gap-3 overflow-y-hidden overflow-x-scroll">
        {movieData.map(({ img }, i) => (
          <div key={i} className="h-48 min-w-28 rounded-xl">
            <img
              src={img}
              alt={`Movie ${i}`}
              className="m-0 h-full w-full rounded-md object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionMovies;
