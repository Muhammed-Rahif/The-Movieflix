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
            <h4 className={`mt-8 px-2 ${active === item.id ? " border-l-4  border-l-primary scale-110" : "text-gray-500"}`}>
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenresList;
