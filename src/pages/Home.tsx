import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api";
import List from "../components/List";
import Loading from "../components/Loading";

function Home() {
  const { isLoading, data } = useQuery(["popular"], getPopular);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <List movies={data?.results} />}
    </>
  );
}

export default Home;
