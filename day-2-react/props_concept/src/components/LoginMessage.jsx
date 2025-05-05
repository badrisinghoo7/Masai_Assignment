import React from "react";

const LoginMessage = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back, User!" : "Please Login"}</h2>
    </div>
  );
};

export default LoginMessage;
