import { Link } from "react-router-dom"

export function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
<div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<Link className="navbar-brand mx-3" to="/">KODIGO MUSIC</Link>
      <li className="nav-item mx-3">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item mx-3">
      <Link className="nav-link" to="/library">Library</Link>
    </li>
    <li className="nav-item mx-3">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
  </ul>
  </div>
 

</div>
</nav>

)};