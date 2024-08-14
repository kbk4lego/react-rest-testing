import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style={{width: "280px"}}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="#" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16"><use href="#home"></use></svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use href="#table"></use></svg>
            Orders
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use href="#grid"></use></svg>
            Products
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
            Customers
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><Link className="dropdown-item" to="#">New project...</Link></li>
          <li><Link className="dropdown-item" to="#">Settings</Link></li>
          <li><Link className="dropdown-item" to="#">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="#">Sign out</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
