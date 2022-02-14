import React from "react";
import {
  //  Link,
  NavLink,
} from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

        {/* with active class property */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/profile">Profile</NavLink>

        {!auth.user && <NavLink to="/login">Login</NavLink>}
      </ul>
    </nav>
  );
}

export default Navbar;
