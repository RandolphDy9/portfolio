
const Navbar = () => {
  return (
    <ul className="nav justify-content-center py-4 mb-3">
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">01. </span>
          <span className="primary-color"><b>Link 1</b></span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">02. </span>
          <span className="primary-color"><b>Link 2</b></span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <span className="accent-color mx-2">03. </span>
          <span className="primary-color"><b>Link 3</b></span>
        </a>
      </li>
    </ul>
  )
}

export default Navbar;