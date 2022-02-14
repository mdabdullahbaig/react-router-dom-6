import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>UserDetails {id} </h1>
    </div>
  );
}

export default UserDetails;
