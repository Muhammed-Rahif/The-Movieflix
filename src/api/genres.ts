import { xiorInstance } from "./api";
import { GetGenresResponse } from "./genres.d";

export class Genres {
  // https://developer.themoviedb.org/reference/genre-movie-list
  public static async movieList() {
    const url = `/genre/movie/list`;
    const res = await xiorInstance.get<GetGenresResponse>(url);
    return res.data;
  }

  // https://developer.themoviedb.org/reference/genre-tv-list
  public static async tvList() {
    const url = `/genre/tv/list`;
    const res = await xiorInstance.get<GetGenresResponse>(url);
    return res.data;
  }
}
