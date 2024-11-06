import { useRecoilValue } from "recoil";
import Main from "../components/Main";
import { likesState } from "../atoms";

function Likes() {
  const movies = useRecoilValue(likesState);
  return <Main movies={movies} />;
}

export default Likes;
