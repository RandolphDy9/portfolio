
const Navbar = () => {
  return (
    <ul className="nav justify-content-center py-4 mb-5">
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">{"<"} 01. </span>
          <span className="primary-color"><b>About</b></span>
          <span className="accent-color mx-2">{"/>"}</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">{"<"} 02. </span>
          <span className="primary-color"><b>Experience</b></span>
          <span className="accent-color mx-2">{"/>"}</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">{"<"} 03. </span>
          <span className="primary-color"><b>Contact</b></span>
          <span className="accent-color mx-2">{"/>"}</span>
        </a>
      </li>
    </ul>
  )
}

export default Navbar;