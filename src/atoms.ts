import { atom } from "recoil";
import { IMovie } from "./types";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const likesState = atom<IMovie[]>({
  key: "movies",
  default: [],
  effects: [localStorageEffect("movies")],
});
