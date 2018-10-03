import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import ProjectsPage from './projects_page/projects_page';
import WritingsPage from './writings_page/writings_page';
import WritingPage from './writing_page/writing_page';
import About from './about_page/about';
import Sidebar from './sidebar/sidebar';

const ComponentWrapper = (props) => {
    return (
        <div className="app-wrapper">
            <Sidebar />
            <Route exact path='/' component={LandingPage} /> 
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/about' component={About} />
            <Route exact path='/writings' component={WritingsPage} />
            <Route path='/writings/:id' component={WritingPage} />
        </div>
    );
};

export default ComponentWrapper;

