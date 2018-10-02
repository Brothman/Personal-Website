import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import ProjectsPage from './projects_page/projects_page';
import WritingsPage from './writings_page/writings_page';
import About from './about_page/about';
import Sidebar from './sidebar/sidebar';

const ComponentWrapper = (props) => {
    return (
        <div className="app-wrapper">
            <Sidebar />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/about' component={About} />
            <Route path='/' component={WritingsPage} />
        </div>
    );
};

export default ComponentWrapper;

// {/* <Route exact path='/' component={LandingPage} /> */}