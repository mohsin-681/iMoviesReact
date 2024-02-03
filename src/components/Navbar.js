import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Navbar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
      };

    const handleSearch = (e) => {
        e.preventDefault();
        props.onSearch(searchTerm);
        navigate('/iMoviesReact/search');
    }
    

    // const submitSearch = (e) => {
    //     e.preventDefault();
    //     console.log("form submitted");
    // }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/iMoviesReact/">iMovies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/iMoviesReact/">Home</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/iMoviesReact/action">Action</Link></li>
                <li><Link className="dropdown-item" to="/iMoviesReact/comedy">Comedy</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/iMoviesReact/all">All</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/iMoviesReact/about">About</Link>
            </li>
            </ul>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
            </form>
        </div>
        </div>
        </nav>
  )
}

export default Navbar
