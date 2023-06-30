import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = (item: { id: string }) => {
  return (
    <div className="heading mb-5 mx-auto" id={item.id}>
      <div className="d-flex justify-content-center">
        <div></div>
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
        <Reveal>
          Experienced Front-end Developer with 5+ years of professional experience
          building responsive websites and applications. Proficient in HTML, CSS,
          JavaScript, and frameworks like React and Angular with a strong focus on
          creating excellent user experiences and interfaces.
        </Reveal>
        <br />
        <br />
        <Reveal>
          I specialize in crafting visually stunning and seamlessly functional
          websites that captivate users. With expertise in HTML, CSS, and
          JavaScript, as well as frameworks like React and Angular, I have
          successfully transformed design concepts into fully responsive and
          intuitive interfaces. Through meticulous attention to detail and a
          user-centric approach, I deliver exceptional user experiences that
          exceed expectations.
        </Reveal>
        <br />
        <br />
        <Reveal>
          My commitment to continuous learning and staying up-to-date with
          industry trends allows me to incorporate cutting-edge technologies and
          best practices into my work. By utilizing agile methodologies and
          collaborating with cross-functional teams, I consistently deliver
          high-quality code that enhances performance and usability. Let's
          collaborate and bring your ideas to life with a front-end experience
          that engages and inspires users.
        </Reveal>
        <br />
      </div>
    </div>
  );
};

export default About;
