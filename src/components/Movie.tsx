import styled from "styled-components";
import { makeImagePath } from "../api";
import { motion, Variants } from "framer-motion";

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.opacity0};
  width: ${(props) => props.theme.movie.width};
  height: ${(props) => props.theme.movie.height};
`;

const Poster = styled.div<{ $poster_path: string }>`
  background-image: url(${(props) => props.$poster_path});
  background-size: cover;
  width: 100%;
  height: 90%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.size.md};
  text-align: center;
  height: 10%;
`;

const MovieVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Movie({
  poster_path,
  title,
  id,
  setMovieId,
}: {
  poster_path: string;
  title: string;
  id: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Wrapper variants={MovieVariants} onClick={() => setMovieId(id)}>
      <Poster $poster_path={makeImagePath(poster_path)} />
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Movie;
