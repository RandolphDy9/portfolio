const Navbar = () => {
  return (
    <ul className="d-flex justify-content-between py-4">
      <div></div>
      <div className="nav justify-content-center">
        <li className="nav-item pointer">
          <a className="nav-link">
            <span className="primary-color"><b>About</b></span>
          </a>
        </li>
        <li className="nav-item pointer">
          <a className="nav-link">
            {/* <span className="accent-color mx-2">{"<"} 02. </span> */}
            <span className="primary-color"><b>Experience</b></span>
            {/* <span className="accent-color mx-2">{"/>"}</span> */}
          </a>
        </li>
        <li className="nav-item pointer">
          <a className="nav-link">
            {/* <span className="accent-color mx-2">{"<"} 03. </span> */}
            <span className="primary-color"><b>Contact</b></span>
            {/* <span className="accent-color mx-2">{"/>"}</span> */}
          </a>
        </li>
      </div>
      <button className="btn-outline fs-6" onClick={() => window.open("https://www.dropbox.com/s/xakoe6rop7xc4aj/RandolphDy_resume.pdf?dl=0")}>
        My Resume
      </button>
    </ul>
  )
}

export default Navbar;