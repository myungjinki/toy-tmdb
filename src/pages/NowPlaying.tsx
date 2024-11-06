import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../api";
import Main from "../components/Main";

function NowPlaying() {
  const query = useQuery(["nowPlaying"], getNowPlaying);

  return <Main {...query} />;
}

export default NowPlaying;
