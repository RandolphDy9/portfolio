import Capsules from "./Capsules";

type FeatureType = {
  id: string;
  reverse: boolean;
};

const Featured = ({ id, reverse }: FeatureType) => {
  return (
    <div
      className="d-flex flex-content-center align-items-center gap-4 col-12 my-4"
      id={id}
    >
      {!reverse ? (
        <>
          <div className="col-5">
            <div className="secondary-color">Featured Project</div>
            <div className="fs-2 fw-semibold highlight accent-color pointer" onClick={() => window.open("https://codepen.io/Randolph-Mayson-Dy/full/VwVBXow")}>
              JavaScript Calculator
            </div>
            <div className="primary-color fs-6">
              Conceived as part of the freeCodeCamp challenges, this project
              showcases my ability to blend logic and user interface design to
              create a functional and interactive calculator that harnesses the
              power of JavaScript.
              <div className="d-flex secondary-color">
                <Capsules label="HTML5" />
                <Capsules label="CSS3" />
                <Capsules label="React" />
              </div>
            </div>
          </div>
          <div className="col-7">
            <img
              src={require("../assets/images/calculator.png")}
              alt="project"
              className="img img-fluid"
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-7">
            <img
              src={require("../assets/images/staffhub.png")}
              alt="project"
              className="img img-fluid"
            />
          </div>
          <div className="col-5">
            <div className="secondary-color">Featured Project</div>
            <div className="fs-2 fw-semibold highlight accent-color pointer" onClick={() => window.open("https://staffhub-site.netlify.app")}>
              StaffHub
            </div>
            <div className="primary-color fs-6">
              Development of responsive and reusable features for FunnelCone’s
              web content management system. Bringing mock-ups to life using
              Angular framework, collaborating closely with the team, and
              documenting bug tickets or any code changes.
              <div className="d-flex secondary-color">
                <Capsules label="Angular" />
                <Capsules label="Node JS" />
                <Capsules label="Mongo DB" />
                <Capsules label="HTML5" />
                <Capsules label="CSS3" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
