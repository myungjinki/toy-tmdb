import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.theme.loading.size};
  height: ${(props) => props.theme.loading.size};
  background-color: ${(props) => props.theme.colors.grey};
`;

function Loading() {
  return <Wrapper>Loading</Wrapper>;
}

export default Loading;
