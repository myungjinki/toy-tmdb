import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import List from "../components/List";
import Loading from "../components/Loading";

function ComingSoon() {
  const { isLoading, data } = useQuery(["comingSoon"], getComingSoon);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <List movies={data?.results} />}
    </>
  );
}

export default ComingSoon;
