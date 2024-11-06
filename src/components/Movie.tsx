import styled from "styled-components";
import { makeImagePath } from "../api";

const Wrapper = styled.div`
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

interface IMovieProps {
  title: string;
  poster_path: string;
}

function Movie({ title, poster_path }: IMovieProps) {
  return (
    <Wrapper>
      <Poster $poster_path={makeImagePath(poster_path)} />
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Movie;
