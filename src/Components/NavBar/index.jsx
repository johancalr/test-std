import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/Test-a" className="nav-link">Punto 1</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Test-b" className="nav-link">Punto 2</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export { NavBar };