import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="app">
        <h1>Product</h1>{" "}
      </div>

      <div className="serchInput">
        <input type="text" name="search" id="search" placeholder="Search..." />
      </div>

      <nav className="nested-nav">
        <ul>
          <Link to="features">Features</Link>
          <Link to="new">New</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Product;
