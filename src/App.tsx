import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
