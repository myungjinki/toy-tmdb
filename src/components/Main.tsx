import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Movie from "../components/Movie";
import Modal from "../components/Modal";
import { IMovie } from "../types";
import Search from "./Search";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
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
  width: 90%;
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

function Main({ movies }: { movies: IMovie[] }) {
  const [movieId, setMovieId] = useState(0);
  const [searchText, setSearchText] = useState("");

  return (
    <Wrapper>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Items variants={ItemsVariants} initial="hidden" animate="visible">
        {movies
          .filter((movie) => {
            if (searchText) {
              return movie.title.includes(searchText);
            } else {
              return true;
            }
          })
          .map((movie) => (
            <Movie key={movie.id} movie={movie} setMovieId={setMovieId} />
          ))}
      </Items>
      <AnimatePresence>
        {movieId !== 0 && (
          <Modal key={movieId} movieId={movieId} setMovieId={setMovieId} />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Main;
