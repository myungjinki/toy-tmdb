import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import Main from "../components/Main";
import Loading from "../components/Loading";

function ComingSoon() {
  const { isLoading, data } = useQuery(["comingSoon"], getComingSoon);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Main movies={data?.results} />}
    </>
  );
}

export default ComingSoon;
