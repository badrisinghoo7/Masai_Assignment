import React from "react";
import LoginMessage from "./LoginMessage";

const Dashboard = ({ isLoggedIn }) => {
  return (
    <div>
      <LoginMessage isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Dashboard;
