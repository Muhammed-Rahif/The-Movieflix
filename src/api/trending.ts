import { xiorInstance } from "./api";
import { GetTrendingAllResponse, TimeWindow } from "./trending.d";

export class Trending {
  // https://developer.themoviedb.org/reference/trending-all
  public static async getAll({
    timeWindow = TimeWindow.Day,
    page = 1,
  }: {
    timeWindow?: TimeWindow;
    page?: number;
  } = {}) {
    const url = `/trending/all/${timeWindow}?language=en-US&page=${page}`;
    const res = await xiorInstance.get<GetTrendingAllResponse>(url);
    return res.data;
  }
}
