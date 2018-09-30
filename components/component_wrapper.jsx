import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import About from './about_page/about';
import Sidebar from './sidebar/sidebar';

const ComponentWrapper = (props) => {
    return (
        <div className="app-wrapper">
            <Sidebar />
            <Route path='/' component={About} />
        </div>
    );
};

export default ComponentWrapper;
