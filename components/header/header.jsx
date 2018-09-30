import React from 'react';
import { NavLink } from 'react-router-dom';

//contact may eventually become absorbed in the /about page. 
const Header = () => {
    return ( 
        <header className="header">
            <img className="avatar" src='' />
            <h1>Benji Rothman</h1>
            <img className="github-icon" src='' />
            <img className="linked-in-icon" src='' />
            <NavLink to="/about">About</NavLink>
            <NavLink to="/writings">Writings</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </header>
     );
}
 
export default Header;