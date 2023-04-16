import "./App.css";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Work />
    </div>
  );
}

export default App;
