import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Work from "./Components/Work";
import { FaDoorClosed } from "react-icons/fa";

function App() {
  const [showWork, setShowWork] = useState(false);
  
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />

      <button onClick={() => setShowWork(!showWork)}>Marvel App</button>
      {
        showWork === true && <Work/>
      }
    </div>
  );
}

export default App;
