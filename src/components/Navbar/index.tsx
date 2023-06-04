//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid nav-logo-text">
                <Link to="/">
                    <h4>Github API</h4>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;