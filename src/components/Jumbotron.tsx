const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="column-1 d-flex flex-column justify-content-center align-items-center">
        <div className="highlight accent-color">Hi There, Welcome! I am</div>
        <div className="primary primary-color">
          Randolph Dy <span className="nickname">{"<" + "Dope" + "/>"}</span>{" "}
        </div>
        <div className="secondary secondary-color">
          I build digital experiences for the online world.
        </div>
        <div className="description primary-color pt-1 pb-3">
          I create the visual and interactive components of a website that users
          see and interact with. This includes integrating the appropriate
          frontend technologies and tools, and ensuring that the website is
          responsive, accessible, and optimized for performance.
        </div>
        <button className="btn-outline">Resume</button>
      </div>
      {/* <motion.div
        className="column-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={require("../assets/images/me.png")}
          alt="randolph"
          className="img-fluid picture"
        />
      </motion.div> */}
    </div>
  );
};

export default Jumbotron;
