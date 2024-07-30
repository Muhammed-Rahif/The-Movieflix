import { Button } from "@material-tailwind/react";
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
    <div className="mt-6 flex w-full gap-2 overflow-y-visible overflow-x-scroll px-4 py-2 xl:px-6">
      {menu.map(({ name, id }) => (
        <Button
          size="sm"
          className={`${active === id ? "bg-primary" : "bg-secondary"} min-w-max`}
          onClick={() => setActive(id)}
          key={id}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}

export default GenresList;
