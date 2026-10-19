
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
      <Link to="/">MovieDB</Link>
      <Link to="/">Movies</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
