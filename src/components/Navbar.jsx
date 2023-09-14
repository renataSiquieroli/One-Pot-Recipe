import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="public\meat2-pot.png" alt="" />
        <h4>One Pot Recipe</h4>
      </div>

      <div className="navlink">
        <NavLink to="/">Home </NavLink>
        <NavLink to="vegan">Vegan </NavLink>
        <NavLink to="meat">Meat </NavLink>
        <NavLink to="fish">Fish </NavLink>
      </div>
      <h4>
        <a href="#login">Login</a>
      </h4>
    </div>
  );
}
