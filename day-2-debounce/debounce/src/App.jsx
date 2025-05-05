import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchWithPagination from "./components/SearchWithPagination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SearchWithPagination />
    </div>
  );
}

export default App;
