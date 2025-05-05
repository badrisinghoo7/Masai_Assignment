import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserInfo;
