import React from 'react';
import {NavLink} from 'react-router-dom'; //using react-router-dom

const Navbar = () => (
    <div className="navbar">
        <header>
            <NavLink to="/" className="navbar__item" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/about" className="navbar__item" activeClassName="is-active">About</NavLink>
        </header>
    </div>
);

export default Navbar;