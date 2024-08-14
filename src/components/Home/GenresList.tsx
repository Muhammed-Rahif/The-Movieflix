import { Button } from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { MediaType } from "../../api/trending.d";
import { useQuery } from "@tanstack/react-query";
import { Genres } from "../../api/genres";

function GenresList() {
  const { data: movieList } = useQuery({
    queryKey: ["Genres.movieList"],
    queryFn: () => Genres.movieList(),
  });
  const { data: tvList } = useQuery({
    queryKey: ["Genres.tvList"],
    queryFn: () => Genres.tvList(),
  });

  const [mediaType, setMediaType] = useState(MediaType.Movie);
  const isMediaMovie = useMemo(() => mediaType == MediaType.Movie, [mediaType]);

  return (
    <div className="mb-2 mt-3 flex w-full flex-col px-4 pr-3 xl:px-6 xl:pr-5">
      <div className="flex gap-2 pl-3">
        <Button
          onClick={() => setMediaType(MediaType.Movie)}
          size="sm"
          className={`${isMediaMovie ? "scale-110 rounded-b-none" : ""} min-[320px]:text-center max-[600px]:bg-sky-300 min-w-max px-2 py-1 text-[10px]`}
          color={isMediaMovie ? "red" : "gray"}
        >
          Movie
        </Button>
        <Button
          onClick={() => setMediaType(MediaType.Tv)}
          size="sm"
          className={`${!isMediaMovie ? "scale-110 rounded-b-none" : ""} min-[320px]:text-center max-[600px]:bg-sky-300 min-w-max px-2 py-1 text-[10px]`}
          color={!isMediaMovie ? "red" : "gray"}
        >
          Tv
        </Button>
      </div>

      <div className="flex w-full gap-2 overflow-y-visible overflow-x-scroll rounded-lg border-2 border-primary p-2">
        {(isMediaMovie ? movieList : tvList)?.genres.map(({ name }) => (
          <Button size="sm" color="gray" className="min-w-max" key={name}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default GenresList;
