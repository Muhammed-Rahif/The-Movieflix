import React from "react";
import movies from "./movie.json";

function Card() {
  return (
    <div className="flex overflow-x-auto ">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="mr-3 flex h-60 min-w-32 md:min-w-44 overflow-hidden rounded-lg bg-cover bg-center text-white shadow-lg"
          style={{
            backgroundImage: `url(${movie.poster})`,
          }}
        >
          <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p className="text-sm text-gray-300">
              {movie.genre} • {movie.year}
            </p>
            <div className="mt-2 flex items-center">
              <span className="mr-2 rounded bg-yellow-500 px-2 py-1 text-xs font-semibold text-black">
                {movie.rating}
              </span>
              <span className="text-sm text-gray-300">Rating</span>
            </div>
            <button className="mt-4 rounded-md bg-primary py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700">
              Watch Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
