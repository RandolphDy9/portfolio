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

  return (
    <div className="app">
      <div className="page-container">
        {/* <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          WELCOME!
        </h1> */}
        <Navbar />
        <Jumbotron />
        <div className="hr-lines"></div>
        <h1 className="primary-color mb-4">Things about me.</h1>
        <About />
        <div className="hr-lines"></div>
        <h1 className="primary-color mb-4">My Work Experience.</h1>
        <Experiences />
        <div className="hr-lines"></div>
        <h1 className="primary-color mb-4">Projects I've worked on.</h1>
        <Projects />
        <div className="hr-lines"></div>
        {/* <h1 className="primary-color mb-4">Reach out.</h1> */}
        <Footer />
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
