import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="app">
        <h1>Home</h1>
      </div>
      <div className="buttonDiv">
        <button onClick={() => navigate("/order")}>Place Order</button>
      </div>
    </>
  );
}

export default Home;
