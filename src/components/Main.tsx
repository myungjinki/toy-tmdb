import { useState } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import { IMovies } from "../types";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.home.wrapper.paddingTop};
  width: 100%;
  max-width: 1024px;
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

function Main({ isLoading, data }: { isLoading: boolean; data: IMovies }) {
  const [movieId, setMovieId] = useState(0);

  return (
    <Wrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Items variants={ItemsVariants} initial="hidden" animate="visible">
          {data?.results.map((movie) => (
            <Movie key={movie.id} {...movie} setMovieId={setMovieId} />
          ))}
        </Items>
      )}
      {movieId !== 0 && (
        <Modal key={movieId} movieId={movieId} setMovieId={setMovieId} />
      )}
    </Wrapper>
  );
}

export default Main;
