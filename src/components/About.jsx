import axios from "axios";
import React, { useState, useEffect } from "react";

function About() {
  const [users, setUser] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:6000/api/comments", {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="app">
      <h1>About</h1>{" "}
    </div>
  );
}

export default About;
