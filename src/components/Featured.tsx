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
            <div className="fs-2 fw-semibold highlight accent-color">
              FunnelCone
            </div>
            <div className="primary-color fs-6">
              Development of responsive and reusable features for FunnelCone’s
              web content management system. Bringing mock-ups to life using
              Angular framework, collaborating closely with the team, and
              documenting bug tickets or any code changes.
              <div className="d-flex secondary-color">
                <Capsules label="Angular" />
                <Capsules label="HTML5" />
                <Capsules label="CSS3" />
                <Capsules label="Firebase" />
                <Capsules label="Angular Material" />
              </div>
            </div>
          </div>
          <div className="col-7">
            <img
              src={require("../assets/images/project1.jpg")}
              alt="project"
              className="img img-fluid"
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-7">
            <img
              src={require("../assets/images/project1.jpg")}
              alt="project"
              className="img img-fluid"
            />
          </div>
          <div className="col-5">
            <div className="secondary-color">Featured Project</div>
            <div className="fs-2 fw-semibold highlight accent-color">
              DigiTayo App 2
            </div>
            <div className="primary-color fs-6">
              Development of responsive and reusable features for FunnelCone’s
              web content management system. Bringing mock-ups to life using
              Angular framework, collaborating closely with the team, and
              documenting bug tickets or any code changes.
              <div className="d-flex secondary-color">
                <Capsules label="Angular" />
                <Capsules label="HTML5" />
                <Capsules label="CSS3" />
                <Capsules label="Firebase" />
                <Capsules label="Angular Material" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
