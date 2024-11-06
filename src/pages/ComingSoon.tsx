import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import Main from "../components/Main";

function ComingSoon() {
  const query = useQuery(["comingSoon"], getComingSoon);

  return <Main {...query} />;
}

export default ComingSoon;
