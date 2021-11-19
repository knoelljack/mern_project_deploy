import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {



    return (
        <div className='nav'>
            <h2 className='logo'>Crypto API Project</h2>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/search'>Search</Link>
            </div>
        </div>
    )
}

export default Navbar
