import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {



    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 class="navbar-brand">TitanMinds</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                id="white">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" className="link">Homepage</Link> &nbsp;
                    </li>
                    <li class="nav-item">
                        <Link to="/books" className="link">Our books</Link> &nbsp;
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" className="link">Contact Us</Link> &nbsp;
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
    )
};

export default Header;
