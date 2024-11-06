import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  top: ${(props) => props.theme.position.header};
  text-transform: uppercase;
`;

const Nav = styled.div``;

const Ul = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.gapSize.xl};
  font-size: ${(props) => props.theme.fontSize.xl};
`;

const Li = styled.li``;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">popular</Link>
          </Li>
          <Li>
            <Link to="/coming-soon">coming soon</Link>
          </Li>
          <Li>
            <Link to="/now-playing">now playing</Link>
          </Li>
        </Ul>
      </Nav>
    </Wrapper>
  );
}

export default Header;
