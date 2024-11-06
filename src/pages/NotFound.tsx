import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
`;

function NotFound() {
  return (
    <Container>
      <Header />
      <main>NotFound</main>
    </Container>
  );
}

export default NotFound;
