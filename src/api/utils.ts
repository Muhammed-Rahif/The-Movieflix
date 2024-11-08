import { imgBaseUrl } from "./api";

// Add Supported Image Sizes
// ---------------------------------------------------------
// poster   = Poster ............  500 x 750   2000 x 3000
// backdrop = Fanart ............ 1280 x 720   3840 x 2160
// still    = TV Show Episode ... 1280 x 720   3840 x 2160
// profile  = Actors Actresses ..  300 x 450   2000 x 3000
// logo     = TMDb Logo

// https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
// API Supported Image Sizes
// ---------------------------------------------------------
// |  poster  | backdrop |  still   | profile  |   logo   |
// | :------: | :------: | :------: | :------: | :------: |
// | -------- | -------- | -------- |    w45   |    w45   |
// |    w92   | -------- |    w92   | -------- |    w92   |
// |   w154   | -------- | -------- | -------- |   w154   |
// |   w185   | -------- |   w185   |   w185   |   w185   |
// | -------- |   w300   |   w300   | -------- |   w300   |
// |   w342   | -------- | -------- | -------- | -------- |
// |   w500   | -------- | -------- | -------- |   w500   |
// | -------- | -------- | -------- |   h632   | -------- |
// |   w780   |   w780   | -------- | -------- | -------- |
// | -------- |  w1280   | -------- | -------- | -------- |
// | original | original | original | original | original |

export type ImgSize =
  | "w45"
  | "w92"
  | "w154"
  | "w185"
  | "w300"
  | "w342"
  | "w500"
  | "w780"
  | "w1280"
  | "original";
export const getImgUrl = (path: string, size: ImgSize) =>
  `${imgBaseUrl}${size}${path}`;
