import "./styles/layout.scss";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e: any) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, [mousePosition]);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: "#0a192f"
  //   },
  // };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  const handleNavigationClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app">
      <div className="page-container">
        {/* <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          WELCOME!
        </h1> */}
        <Navbar />
        <Jumbotron />
        <div className="col-12 row">
          <div className="col-12 col-md-10">
            <div className="hr-lines"></div>
            <h1 className="primary-color mb-4">Things about me.</h1>
            <About id="about" />
            <div className="hr-lines"></div>
            <h1 className="primary-color mb-4">My Work Experience.</h1>
            <Experiences id="experiences" />
          </div>
          <div className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center sticky-div gap-4">
            <img src={require("./assets/logos/github.png")} alt="github-logo" width="30" className="sticky-image" />
            <img src={require("./assets/logos/linkedin.png")} alt="linkedin-logo" width="30" className="sticky-image" />
            <img src={require("./assets/logos/facebook.png")} alt="facebook-logo" width="30" className="sticky-image" />
          </div>
        </div>
        <div className="hr-lines"></div>
        <h1 className="primary-color mb-4">Projects I've worked on.</h1>
        <Projects id="projects" />
        <div className="hr-lines"></div>
        <Footer id="footer" />
      </div>
      {/* <motion.div
        className={`cursor ${cursorVariant === "default" ? "" : "invert"}`}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
      ></motion.div> */}
    </div>
  );
}

export default App;
