import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../api";
import Main from "../components/Main";
import Loading from "../components/Loading";

function NowPlaying() {
  const { isLoading, data } = useQuery(["nowPlaying"], getNowPlaying);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Main movies={data?.results} />}
    </>
  );
}

export default NowPlaying;
