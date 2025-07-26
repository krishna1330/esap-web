import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="d-flex align-items-center w-100">
                    
                    {/* Logo */}
                    <NavLink className="navbar-brand d-flex align-items-center fw-bold text-dark" to="/">
                        <i className="bi bi-mortarboard-fill text-primary me-2"></i> ESAP
                    </NavLink>


                    {/* Navigation Links - Centered */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`
                                    }
                                    to="/"
                                >
                                    <i className="bi bi-house-door me-1"></i> Home
                                </NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`
                                    }
                                    to="/admins"
                                >
                                    <i className="bi bi-person-badge me-1"></i> Admins
                                </NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'text-primary fw-bold' : 'text-dark'}`
                                    }
                                    to="/students"
                                >
                                    <i className="bi bi-people me-1"></i> Students
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Profile Dropdown - Right */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle text-dark bg-transparent border-0"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-circle me-1"></i> Profile
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li><NavLink className="dropdown-item" to="/profile">My Profile</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button className="dropdown-item text-danger" onClick={() => alert('Logged out')}>
                                        <i className="bi bi-box-arrow-right me-1"></i> Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
