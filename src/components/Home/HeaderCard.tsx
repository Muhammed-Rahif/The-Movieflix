import { Button, Card, CardBody } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Movies } from "../../api/movies";
import { useMemo } from "react";
import { Utils } from "../../api/utils";
import { MediaType } from "../../api/trending.d";
import { TvSeries } from "../../api/tv-series";
import { GetMovieDetailsResponse } from "../../api/movies.d";
import { GetTvSeriesDetailsResponse } from "../../api/tv-series.d";

type Props = {
  id: number;
  mediaType: MediaType;
};

type GetDetailsResponse = GetMovieDetailsResponse | GetTvSeriesDetailsResponse;

function isMovie(value?: GetDetailsResponse): value is GetMovieDetailsResponse {
  if (typeof value === "undefined") return false;
  return Object.prototype.hasOwnProperty.call(value, "original_title");
}

export default function HeaderCard({ id, mediaType }: Props) {
  const { data } = useQuery<GetDetailsResponse, Error>({
    queryKey:
      mediaType == MediaType.Movie
        ? ["Movies.getDetails", id]
        : ["TvSeries.getDetails", id],
    queryFn: () =>
      mediaType == MediaType.Movie
        ? Movies.getDetails(id)
        : TvSeries.getDetails(id),
  });
  const title = useMemo(
    () => (isMovie(data) ? data.original_title : data?.name),
    [data],
  );
  const bgImg = useMemo(
    () => Utils.getImgUrl(data?.backdrop_path ?? data?.poster_path ?? ""),
    [data?.backdrop_path, data?.poster_path],
  );
  const logoImg = useMemo(
    () =>
      Utils.getImgUrl(data?.images.logos[0]?.file_path ?? "", {
        isSmaller: true,
      }),
    [data?.images.logos],
  );

  return (
    <Card
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="relative z-10 h-full max-w-none items-center justify-end overflow-hidden rounded-none bg-secondary bg-cover bg-center bg-no-repeat pb-3 text-center [transition:background-image_1s_ease-in-out]"
    >
      <CardBody className="prose prose-invert relative z-10 flex flex-col items-center gap-2 !text-white">
        <div
          className="h-20 max-w-80 bg-contain bg-center bg-no-repeat [transition:background-image_1s_ease-in-out] lg:h-24"
          style={{
            aspectRatio: data?.images.logos[0]?.aspect_ratio,
            backgroundImage: `url(${logoImg})`,
            height: data?.images.logos?.length == 0 ? "min-content" : undefined,
          }}
          title={title}
          aria-label={title}
        >
          {data?.images.logos?.length == 0 && <h1 className="my-0">{title}</h1>}
        </div>

        <div className="flex items-center justify-center gap-3">
          {data?.genres.map((g, i) => (
            <figcaption
              key={i}
              className="m-0 text-white before:mr-2.5 before:content-['●'] first:before:content-['']"
            >
              {g.name}
            </figcaption>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button
            size="sm"
            variant="text"
            color="white"
            className="flex items-center gap-2"
          >
            <i className="eva eva-plus-square-outline text-xl" /> Later
          </Button>
          <Button className="flex items-center gap-2">
            <i className="eva eva-play-circle-outline text-xl" /> Play
          </Button>
          <Button
            size="sm"
            variant="text"
            color="white"
            className="flex items-center gap-2"
          >
            <i className="eva eva-info-outline text-xl" /> Info
          </Button>
        </div>
      </CardBody>

      <div className="pointer-events-none absolute bottom-0 z-0 h-64 w-full bg-gradient-to-t from-base-100 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 z-0 h-full w-full bg-gradient-to-t from-base-100/30 to-transparent"></div>
    </Card>
  );
}
