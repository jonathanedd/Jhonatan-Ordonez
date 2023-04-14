import "./App.css";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <AboutMe />
    </div>
  );
}

export default App;
