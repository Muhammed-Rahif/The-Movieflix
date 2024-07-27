import { useState } from "react";

function GenresList() {
  const menu = [
    { id: 1, name: "All" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Movie" },
    { id: 4, name: "Anime" },
    { id: 5, name: "Romance" },
    { id: 6, name: "Horror" },
  ];

  const [active, setActive] = useState(menu[0].id);

  return (
    <div className="prose prose-invert flex items-center justify-between">
      <div className="flex gap-2">
        {menu.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`mb-3 flex cursor-pointer items-center transition-all duration-300 ease-in-out ${
              active === item.id
                ? "text-white "
                : ""
            }`}
          >
            <h2 className={`mt-8 px-2 ${active === item.id ? " border-l-4  border-l-primary scale-110" : "text-gray-500"}`}>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenresList;
