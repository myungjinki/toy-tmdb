import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.theme.movie.size};
  height: ${(props) => props.theme.movie.size};
  background-color: ${(props) => props.theme.colors.accent};
`;

function Movie() {
  return <Wrapper></Wrapper>;
}

export default Movie;
