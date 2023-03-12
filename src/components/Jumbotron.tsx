const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="column-1">
        <div className="highlight accent-color">Hi There, Welcome! I am</div>
        <div className="primary primary-color">Randolph Dy <span className="nickname">{'<' + 'Dope' + '/>'}</span> </div>
        <div className="secondary secondary-color">I build digital experiences for the online world.</div>
        <div className="description primary-color pt-1 pb-3">
          I create the visual and interactive components of a website that users
          see and interact with. This includes designing and implementing the user
          interface (UI), selecting and integrating the appropriate frontend
          technologies and tools, and ensuring that the website is responsive,
          accessible, and optimized for performance.
        </div>
        <button className="btn-outline">
          Resume
        </button>
      </div>
      <div className="column-2">
        <img src={require("../assets/images/me.png")} alt="randolph" className="picture" />
      </div>
    </div>
  )
}

export default Jumbotron;