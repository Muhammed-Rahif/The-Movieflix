import { useState } from "react";

function GenresList() {
  const menu = [
    { id: 1, name: "All" },
    { id: 2, name: "Action" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Movie" },
    { id: 5, name: "Animation" },
    { id: 6, name: "Romance" },
    { id: 7, name: "Horror" },
    { id: 8, name: "Adventure" },
    { id: 9, name: "Fantasy" },
    { id: 10, name: "Thriller" },
  ];

  const [active, setActive] = useState(menu[0].id);

  return (
    <div className="my-4 h-5">
      <div className="absolute left-0 flex w-screen gap-2 overflow-y-hidden overflow-x-scroll px-4 sm:relative sm:w-full">
        {menu.map(({ name, id }) => (
          <p
            key={id}
            className={`m-0 flex cursor-pointer items-center border-l-primary px-1 leading-5 duration-300 ${active === id ? "scale-105 border-l-[3px]" : "text-gray-500"}`}
            onClick={() => setActive(id)}
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GenresList;
