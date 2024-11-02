import { xiorInstance } from "./api";
import { GetTvSeriesDetailsResponse } from "./tv-series.d";

export class TvSeries {
  // https://developer.themoviedb.org/reference/tv-series-details
  public static async getDetails(seriesId: number) {
    const url = `/tv/${seriesId}?append_to_response=images&include_image_language=null,en`;
    const res = await xiorInstance.get<GetTvSeriesDetailsResponse>(url);
    return res.data;
  }
}
