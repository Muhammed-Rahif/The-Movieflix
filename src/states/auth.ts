import { atomWithStorage } from "jotai/utils";
import { AppKeys } from "../constants/keys";
import { storage } from "./storage";

export const tmdbSessionIdAtom = atomWithStorage(
  AppKeys.USER_SESSION_KEY,
  null,
  storage,
  {
    getOnInit: true,
  },
);
