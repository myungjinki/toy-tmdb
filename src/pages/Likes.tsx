import { useRecoilValue } from "recoil";
import List from "../components/List";
import { likesState } from "../atoms";

function Likes() {
  const movies = useRecoilValue(likesState);
  return <List movies={movies} />;
}

export default Likes;
