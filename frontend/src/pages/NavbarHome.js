import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import Insights from './Insights';
import { useNavigate } from 'react-router-dom';
import {  handleError, handleSuccess } from '../utils';

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState('');
  

   
  useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
        navigate('/login');
    }, 1000)
}


    const logoutLinkStyle = {
        backgroundColor: '#bf3d4a', // Set background color to red
        color: 'white', // Text color for contrast
        padding: '10px', // Padding for better spacing
        textDecoration: 'none', // Remove underline from the link
        borderRadius: '4px', // Optional: Add rounded corners
        display: 'block', // Make the link take up the full width
      };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link className="nav-link" to="/home" style={{ fontWeight: 'bold' }} >TrEx</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Track and manage your expenses</a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/insights"  >Insights</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/bot"  >Talk to Tira</Link>
          </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {loggedInUser}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" onClick={handleLogout} style={logoutLinkStyle} >Logout</a></li>
            {/* <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar