import React from "react";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div>
      <Dashboard isLoggedIn={true} />
      <Dashboard isLoggedIn={false} />
    </div>
  );
};

export default Navbar;
