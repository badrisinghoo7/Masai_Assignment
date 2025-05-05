import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greetings from "./components/Greetings";
import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Greetings name="john" timeIfDay="Morning" />
          <Greetings name="Sarah" timeIfDay="Afternoon" />
          <Greetings name="Alex" timeIfDay="Evening" />
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>User Profile Section</h1>
          <UserProfile
            name="John Doe"
            email="john@gmail.com"
            bio="I am a software developer"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="John Doe"
          />
        </div>
      </div>
      <div>
        <h2>Logged In:</h2>
        <UserDashboard
          name="Alice"
          age={28}
          email="alice@example.com"
          isLoggedIn={true}
        />

        <h2>Logged Out:</h2>
        <UserDashboard name="" age={0} email="" isLoggedIn={false} />
      </div>
    </div>
  );
}

export default App;
