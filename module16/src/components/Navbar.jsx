import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
  };

  const activeStyle = {
    color: 'blue',
    fontWeight: 'bold',
  };

  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <NavLink
        to="/"
        style={linkStyle}
        end
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyle}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={linkStyle}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
