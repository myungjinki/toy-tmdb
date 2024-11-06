import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api";
import Main from "../components/Main";
import Loading from "../components/Loading";

function Home() {
  const { isLoading, data } = useQuery(["popular"], getPopular);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Main movies={data?.results} />}
    </>
  );
}

export default Home;
