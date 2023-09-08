import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Store</Link>
        <Link to="/">Contact</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}
