import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';

//contact may eventually become absorbed in the /about page. 
const Sidebar = () => {
    return (
        
        <div className="sidebar">
            <h1 className="name">Benji Rothman</h1>
            <p className="personal-description">Fullstack Web Developer and Writer</p>
            <Link className="benji-photo" to="/">
                <img className="benji-photo" src='https://s3.us-east-2.amazonaws.com/benji-personal-website/Larger_Color_Corrected.jpg' />
            </Link>

            <div className="social-icons">
                <a className="social-button" href="https://github.com/Brothman/">
                    <i className="fab fa-github"></i>
                </a>
                <a className="social-button" href="https://www.linkedin.com/in/brothman7000/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="social-button" href="mailto:brothman7000@gmail.com?Subject=Hello%20from%20Portfolio%20Website">
                    <i className="far fa-envelope"></i>
                </a>
            </div>

            <div className="navigation-buttons">
                <NavLink className="nav-button" to="/about">About</NavLink>
                <NavLink className="nav-button" to="/projects">Projects</NavLink>
                <NavLink className="nav-button" to="/writings">Writings</NavLink>
                <NavLink className="nav-button" to="/contact">Contact</NavLink>
            </div>


            <Particles className="particles-wrapper"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
                />

            
        </div>
    );
}

export default Sidebar;