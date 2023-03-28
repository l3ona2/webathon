import {Link} from 'react-router-dom'
import './nav.css'

function BasicExample() {
  return (
    <div>
      <ul className="nav bg-dark d-flex justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BasicExample;