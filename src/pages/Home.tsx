import styled from "styled-components";
import { getPopular } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.home.wrapper.paddingTop};
  width: 100%;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Home() {
  const { isLoading, data } = useQuery(["popular"], getPopular);
  return (
    <Wrapper>
      <Suspense fallback={<Loading />}>
        <Items>
          {data?.results.map((movie) => (
            <Movie key={movie.id} />
          ))}
        </Items>
      </Suspense>
    </Wrapper>
  );
}

export default Home;
