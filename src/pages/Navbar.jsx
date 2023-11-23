import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to='/home' className='nav-link'>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/about' className='nav-link'>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/contact' className='nav-link'>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/playground' className='nav-link'>
                                    REST
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/state' className='nav-link'>
                                    State
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/login' className='nav-link'>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;