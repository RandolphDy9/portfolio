const Project = ({ image }: { image: string }) => {
  return (
    <div className="col-12 col-sm-4 my-3">
      <img src={image} className="img-fluid" alt="project-1" />
    </div>
  )
}

const Projects = (item: { id: string }) => {
  return (
    <div className="" id={item.id}>
      <div className="row primary-color text-center">
        <Project image={require("../assets/images/project1.jpg")} />
        <Project image={require("../assets/images/project1.jpg")} />
        <Project image={require("../assets/images/project1.jpg")} />
      </div>
    </div>
  )
}

export default Projects;