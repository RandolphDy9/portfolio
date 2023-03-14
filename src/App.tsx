import "./styles/layout.scss";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <div className="page-container">
        <Navbar />
        <Jumbotron />
        <About />
      </div>
    </div>
  );
}

export default App;
