import { motion } from "framer-motion";
import Capsules from "./Capsules";

const Experiences = (item: { id: string }) => {
  return (
    <div className="heading my-5 mx-auto" id={item.id}>
      <div className="row fs-6 my-5 content">
        <div className="col-12 col-sm-4 secondary-color">Aug 2018 - Present</div>
        <div className="col-12 col-sm-8 ">
          <motion.div whileHover={{ scale: 1.1, transformOrigin: "right", translateX: "10%" }} whileTap={{ scale: 0.9 }} className="fs-5 fw-semibold highlight accent-color">
            Exist Software Labs, Inc. <img src={require("../assets/images/external-link.png")} alt="arrow-pic" width="15" />
          </motion.div>
          <div className="secondary-color">Frontend Developer • Full time</div>
          <div className="primary-color fs-6">
            Contributed to the core system of development by working on modules
            and new features for applications using HTML5, CSS3, JavaScript, and
            Angular.
            <div className="d-flex secondary-color">
              <Capsules label="Angular" />
              <Capsules label="TypeScript" />
              <Capsules label="JavaScript" />
              <Capsules label="HTML5" />
              <Capsules label="CSS3" />
              <Capsules label="Bootstrap" />
              <Capsules label="AngularJS" />
            </div>
          </div>
        </div>
      </div>
      <div className="row fs-6 my-5 content">
        <div className="col-12 col-sm-4 secondary-color">Aug 2022 - Present</div>
        <div className="col-12 col-sm-8">
          <motion.div whileHover={{ scale: 1.1, transformOrigin: "right", translateX: "10%" }} whileTap={{ scale: 0.9 }} className="fs-5 fw-semibold highlight accent-color">
            Talino Venture Labs <img src={require("../assets/images/external-link.png")} alt="arrow-pic" width="15" />
          </motion.div>
          <div className="secondary-color">Frontend Developer • Part time</div>
          <div className="primary-color fs-6">
            Writing well-structured, modular, and maintainable code using best
            practices and following coding standards. Working with React to
            develop web apps.
            <div className="d-flex secondary-color">
              <Capsules label="Ionic" />
              <Capsules label="ReactJS" />
              <Capsules label="React Native" />
              <Capsules label="Tailwind CSS" />
              <Capsules label="Webflow" />
              <Capsules label="HTML5" />
              <Capsules label="CSS3" />
            </div>
          </div>
        </div>
      </div>
      <div className="row fs-6 my-5 content">
        <div className="col-12 col-sm-4 secondary-color">June 2021 - Sep 2021</div>
        <div className="col-12 col-sm-8">
          <motion.div whileHover={{ scale: 1.1, transformOrigin: "right", translateX: "10%" }} whileTap={{ scale: 0.9 }} className="fs-5 fw-semibold highlight accent-color">
            IT Creed <img src={require("../assets/images/external-link.png")} alt="arrow-pic" width="15" />
          </motion.div>
          <div className="secondary-color">Angular Developer • Freelance</div>
          <div className="primary-color fs-6">
            Development of responsive and reusable features for FunnelCone’s web
            content management system. Bringing mock-ups to life using Angular
            framework, collaborating closely with the team, and documenting bug
            tickets or any code changes.
            <div className="d-flex secondary-color">
              <Capsules label="Angular" />
              <Capsules label="HTML5" />
              <Capsules label="CSS3" />
              <Capsules label="Firebase" />
              <Capsules label="Angular Material" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
