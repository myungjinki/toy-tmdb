import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { makeImagePath } from "../api";
import { IMovie } from "../types";

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.opacity0};
  width: ${(props) => props.theme.movie.width};
  height: ${(props) => props.theme.movie.height};
`;

const Poster = styled.div<{ $poster_path: string }>`
  background-image: url(${(props) => props.$poster_path});
  background-size: cover;
  width: 100%;
  height: 80%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.size.md};
  text-align: center;
  height: 10%;
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.size.md};
  text-align: center;
  height: 10%;
`;

const Popularity = styled.div<{ $avg: number }>`
  ${(props) => {
    if (props.$avg < 60) {
      return "background: linear-gradient(90deg, red, white);";
    } else if (props.$avg < 70) {
      return "background: linear-gradient(90deg, yellow, white);";
    } else if (props.$avg < 80) {
      return "background: linear-gradient(90deg, green, white);";
    } else if (props.$avg < 100) {
      return "background: linear-gradient(90deg, blue, white);";
    }
  }}

  padding: 4px;
  color: black;
  border-radius: 4px;
`;

const Adult = styled.div`
  background-color: aliceblue;
  padding: 4px;
  color: black;
  border-radius: 4px;
  text-transform: uppercase;
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
  movie,
  setMovieId,
}: {
  movie: IMovie;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const average = Math.floor(movie.vote_average * 10);
  return (
    <Wrapper variants={MovieVariants} onClick={() => setMovieId(movie.id)}>
      <Poster $poster_path={makeImagePath(movie.poster_path)} />
      <Title>{movie.title}</Title>
      <Tags>
        <Popularity $avg={average}>{average}%</Popularity>
        <Adult>{movie.original_language}</Adult>
      </Tags>
    </Wrapper>
  );
}

export default Movie;
