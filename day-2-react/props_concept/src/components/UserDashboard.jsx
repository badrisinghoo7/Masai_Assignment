import React from "react";
import UserProfile from "./UserProfile";

const UserDashboard = ({ name, age, email, isLoggedIn }) => {
  const src =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <UserProfile
            src={src}
            alt="user"
            name={name}
            email={email}
            bio={`I am ${age} years old`}
          />
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h1>You need to login first.</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
