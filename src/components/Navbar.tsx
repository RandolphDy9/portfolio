const Navbar = () => {
  return (
    <ul className="d-flex justify-content-between py-4">
      <div className="fs-5 accent-color d-flex align-items-center">
        <strong>
          &lt; DY /&gt;
        </strong>
      </div>
      {/* <div className="nav justify-content-center">
        <li className="nav-item pointer">
          <a href="test" className="nav-link">
            <span className="primary-color"><b>About</b></span>
          </a>
        </li>
        <li className="nav-item pointer">
          <a href="test" className="nav-link">
            <span className="primary-color"><b>Experience</b></span>
          </a>
        </li>
        <li className="nav-item pointer">
          <a href="test" className="nav-link">
            <span className="primary-color"><b>Contact</b></span>
          </a>
        </li>
      </div> */}
      <button className="btn-outline fs-5" onClick={() => window.open("https://www.dropbox.com/s/xakoe6rop7xc4aj/RandolphDy_resume.pdf?dl=0")}>
        My Resume
      </button>
    </ul>
  )
}

export default Navbar;