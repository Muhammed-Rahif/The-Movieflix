import { movieData } from "./SampleData";

function ActionMovies() {
  return (
    <div className="">
      <h2 className="m-0 ml-4">Actions</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll">
        {movieData.map((item, i) => (
          <div key={i} className="h-48 min-w-28 rounded-xl p-4">
            <img
              src={item.img}
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
