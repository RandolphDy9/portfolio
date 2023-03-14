import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="heading mb-5 mx-auto">
      <div className="d-flex justify-content-center hr-lines">
        <span className="accent-color mx-2">{"<"} 01. </span>
        <span className="primary-color">
          <b>About</b>
        </span>
        <span className="accent-color mx-2">{"/>"}</span>
      </div>
      <div className="d-flex justify-content-between">
        <div>

        </div>
        <motion.div
          className="about-pic d-flex justify-content-center b-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={require("../assets/images/me.png")}
            alt="randolph"
            className="img img-fluid picture"
          />
        </motion.div>
      </div>
      <div className="content primary-color">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar ut
        ante nec ultricies. Integer ac dignissim orci, sit amet volutpat libero.
        Ut nec odio sem. Suspendisse ultrices nibh at sagittis egestas. Morbi
        molestie leo dui, vel ullamcorper nunc fermentum vitae. Mauris
        vestibulum tortor consectetur ultrices tincidunt. Suspendisse non
        accumsan diam, eget pretium metus. Maecenas in felis a dolor facilisis
        congue vehicula a nunc. Cras tempor non lorem eget imperdiet.
        <br /><br />
        Sed a arcu ex. Etiam gravida augue vel tempus fringilla. Phasellus
        tincidunt dapibus nibh, eget sodales risus condimentum vitae. Proin
        ligula ex, imperdiet luctus arcu sit amet, condimentum interdum purus.
        Ut mollis tempus massa, non feugiat lorem fermentum nec. In ex diam,
        commodo eu venenatis dictum, ornare ac dui. Maecenas cursus metus eget
        felis pulvinar fringilla.
        <br /><br />
        Aliquam interdum est tortor, eget viverra quam lacinia sed. Vestibulum
        quis placerat nibh. Suspendisse vehicula feugiat ante eu faucibus. Nulla
        maximus justo a egestas bibendum. Pellentesque et dapibus sapien.
        Maecenas efficitur eros accumsan, blandit orci eget, pellentesque odio.
        Fusce ullamcorper lorem ex, eu ultrices nibh malesuada sit amet.
        Curabitur id massa elit.
        <br /><br />
        Aliquam interdum est tortor, eget viverra quam lacinia sed. Vestibulum
        quis placerat nibh. Suspendisse vehicula feugiat ante eu faucibus. Nulla
        maximus justo a egestas bibendum. Pellentesque et dapibus sapien.
        Maecenas efficitur eros accumsan, blandit orci eget, pellentesque odio.
        Fusce ullamcorper lorem ex, eu ultrices nibh malesuada sit amet.
        Curabitur id massa elit.
      </div>
    </div>
  );
};

export default About;
