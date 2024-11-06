import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api";
import Main from "../components/Main";

function Home() {
  const query = useQuery(["popular"], getPopular);

  return <Main {...query} />;
}

export default Home;
