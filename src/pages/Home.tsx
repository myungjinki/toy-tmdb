import styled from "styled-components";
import { getPopular } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.home.wrapper.paddingTop};
  width: 100%;
  min-height: 100%;
`;

const Items = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.size.md};
  padding: ${(props) => props.theme.size.md};
  width: 100%;
`;

const ItemsVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.3,
    },
  },
};

function Home() {
  const { isLoading, data } = useQuery(["popular"], getPopular);
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Items variants={ItemsVariants} initial="hidden" animate="visible">
          {data?.results.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </Items>
      )}
    </Wrapper>
  );
}

export default Home;
