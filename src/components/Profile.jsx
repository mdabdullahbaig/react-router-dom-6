import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>Welcome {auth.user}</h1>
      </div>

      <button onClick={handleClick}>Logout</button>
    </>
  );
}

export default Profile;
