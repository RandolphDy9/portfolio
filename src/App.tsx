import "./styles/layout.scss";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="page-container">
        <Navbar />
        <Jumbotron />
      </div>
    </div>
  );
}

export default App;
