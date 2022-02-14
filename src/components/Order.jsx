import React from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div className="app">
        <h1>Order Page</h1>
      </div>

      <div className="buttonDiv">
        <button onClick={() => navigate(-1)}> Go Back</button>
      </div>
    </>
  );
}

export default Order;
