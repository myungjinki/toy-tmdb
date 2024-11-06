import { motion } from "framer-motion";
import { Link, useMatch, useMatches } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  top: ${(props) => props.theme.header.wrapper};
  text-transform: uppercase;
`;

const Nav = styled.div``;

const Ul = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.size.xl4};
  font-size: ${(props) => props.theme.size.xl};
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.size.xs};
`;

const Circle = styled(motion.div)`
  width: ${(props) => props.theme.size.xs3};
  height: ${(props) => props.theme.size.xs3};
  background-color: ${(props) => props.theme.colors.accent};
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
