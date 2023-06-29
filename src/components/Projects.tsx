const Projects = (item: { id: string }) => {
  return (
    <div className="" id={item.id}>
      <div className="row primary-color text-center">
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
        <div className="col-12 col-sm-4 my-3">
          <img src={require("../assets/images/project1.jpg")} className="img-fluid" alt="project-1" />
        </div>
      </div>
    </div>
  )
}

export default Projects;