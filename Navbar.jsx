import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Istiyak Service Point</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="btn-login">Login</Link>
        <Link to="/signup" className="btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}
export default Navbar;
