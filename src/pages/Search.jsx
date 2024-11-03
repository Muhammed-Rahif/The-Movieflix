import React, { useState } from "react";
import Card from "../components/common/Card";
function Search() {
  const [search, setSearch] = useState("");
  const [typed, setTyped] = useState([]);

  const resetMySearch = () => {
    setSearch("");
  };

  const handleSearch = () => {
    if (search.trim()) {
      setTyped([...typed, search]);
      setSearch("");
    }
  };

  return (
    <div id="search" className="flex flex-col justify-center py-3">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ease text w-full rounded-md border border-slate-200 bg-transparent py-2 pl-10 pr-10 text-sm shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
            placeholder="Search for a show, movie, genre..."
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <i
            className="eva eva-search-outline absolute left-1 top-1 h-5 w-5 cursor-pointer px-1 text-2xl"
            onClick={handleSearch}
          />
          <i
            className="eva eva-close-outline absolute right-5 top-1 h-5 w-5 cursor-pointer px-1 text-2xl duration-150 active:text-gray-500"
            onClick={resetMySearch}
          />
        </div>
        <div className="mt-4 flex items-center space-x-2 md:ml-3 md:mt-0">
          {typed.slice(-3).map((item, i) => (
            <button
              key={i}
              onClick={() => setTyped(typed.filter((_, index) => index !== i))}
              className="activeborder-slate-800 flex items-center rounded-xl border border-slate-600 px-2 text-center text-sm text-slate-300 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              {item}
              <i className="eva eva-close-outline ml-2 cursor-pointer text-lg" />
            </button>
          ))}
        </div>
      </div>

      <h2 className="mt-6">TV Shows</h2>
      <Card />
      <h2 className="mt-4">Action Movies</h2>
      <Card />
      <h2 className="mt-4">Comedy Shows</h2>
      <Card />
    </div>
  );
}

export default Search;
