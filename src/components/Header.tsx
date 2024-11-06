import { motion } from "framer-motion";
import { Link, useMatch, useMatches } from "react-router-dom";
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

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.gapSize.xs};
`;

const Circle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: red;
`;

function Header() {
  const homeMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlayingMatch = useMatch("/now-playing");
  return (
    <Wrapper>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">popular </Link>
            {homeMatch && <Circle layoutId="circle" />}
          </Li>
          <Li>
            <Link to="/coming-soon">coming soon</Link>
            {comingSoonMatch && <Circle layoutId="circle" />}
          </Li>
          <Li>
            <Link to="/now-playing">now playing</Link>
            {nowPlayingMatch && <Circle layoutId="circle" />}
          </Li>
        </Ul>
      </Nav>
    </Wrapper>
  );
}

export default Header;
