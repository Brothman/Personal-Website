import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import ProjectsPage from './projects_page/projects_page';
import WritingsPage from './writings_page/writings_page';
import WritingPage from './writing_page/writing_page';
import AboutV2 from './about_page_v2/about';
import Sidebar from './sidebar/sidebar';
import Particles from 'react-particles-js';

const ComponentWrapper = (props) => {

    const visitHome = () => {
        props.history.push('/');
    }

    const expandHeader = () => {
        const headerContainer = document.querySelector('.header-container');
        headerContainer.style.height = '275px';
        headerContainer.style.maxHeight = '275px';

        const headerParticles = document.querySelector('.particles-wrapper-header');
        headerParticles.style.height = '275px';
    }

    return (
        <div className="app-wrapper">
            <Sidebar />
            <div className="hidden" />
            <div className="header-container">
                <h1 className="header-name" onClick={visitHome.bind(this)}>Benji Rothman</h1>
                <i className="nav-square fas fa-bars" onClick={expandHeader}/>

                <div className="navigation-buttons">
                    <NavLink activeStyle={{ opacity: 1 }} className="header-nav-button nav-button" to="/about">About</NavLink>
                    <NavLink activeStyle={{ opacity: 1 }} className="header-nav-button nav-button" to="/projects">Projects</NavLink>
                    <NavLink activeStyle={{ opacity: 1 }} className="header-nav-button nav-button" to="/writings">Writings</NavLink>
                    <NavLink activeStyle={{ opacity: 1 }} className="header-nav-button nav-button" to="/enigma">Enigma</NavLink>
                </div>

                <Particles className="particles-wrapper-header"
                    params={{
                        "particles": {
                            "number": {
                                "value": 30
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
            <Route exact path='/' component={LandingPage} /> 
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/about' component={AboutV2} />
            <Route exact path='/writings' component={WritingsPage} />
            <Route path='/writings/:id' component={WritingPage} />
        </div>
    );
};

export default withRouter(ComponentWrapper);

