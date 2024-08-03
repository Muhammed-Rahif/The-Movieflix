import { xiorInstance } from "./api";
import { GetMovieDetailsResponse } from "./movies.d";

export class Movies {
  // https://developer.themoviedb.org/reference/movie-details
  public static async getDetails(movieId: number) {
    const url = `/movie/${movieId}?append_to_response=images&include_image_language=null,en`;
    const res = await xiorInstance.get<GetMovieDetailsResponse>(url);
    return res.data;
  }
}
