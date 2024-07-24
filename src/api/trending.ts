import { xiorInstance } from "./api";
import type { GetTrendingAllResponse } from "./trending.d";

type TimeWindow = "day" | "week";

// https://developer.themoviedb.org/reference/trending-all
export async function getTrendingAll({
  timeWindow = "day",
  page = 1,
}: {
  timeWindow?: TimeWindow;
  page?: number;
} = {}): Promise<GetTrendingAllResponse> {
  const url = `https://api.themoviedb.org/3/trending/all/${timeWindow}?language=en-US&page=${page}`;
  const res = await xiorInstance.get<GetTrendingAllResponse>(url);
  return res.data;
}
