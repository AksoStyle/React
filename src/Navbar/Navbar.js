import {Link} from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return ( 
        <details>
        <summary></summary>
        <nav className="menu">
            <div className="links">
            <Link to="/Home">Home</Link>
                <Link to="/Registration">Registration</Link>
                <div className="dot"></div>
            </div>
        </nav>
        </details>
     );
}
 
/**
 <Link to="/Home">Home</Link>
                <Link to="/Registration">Registration</Link>
                <div className="dot"></div>
  */
export default NavBar;