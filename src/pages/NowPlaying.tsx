import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../api";
import List from "../components/List";
import Loading from "../components/Loading";

function NowPlaying() {
  const { isLoading, data } = useQuery(["nowPlaying"], getNowPlaying);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <List movies={data?.results} />}
    </>
  );
}

export default NowPlaying;
