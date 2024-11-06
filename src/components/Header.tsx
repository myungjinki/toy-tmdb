import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">popular</Link>
          </li>
          <li>
            <Link to="/coming-soon">coming soon</Link>
          </li>
          <li>
            <Link to="/now-playing">now playing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
