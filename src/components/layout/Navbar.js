import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar bg-dark">
      <h1>
        <Link to="index.html"><i className="fa fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link to="profiles.html">Developers</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
     );
}
 
export default Navbar;