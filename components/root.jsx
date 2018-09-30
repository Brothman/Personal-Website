import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import ComponentWrapper from './component_wrapper.jsx';

const Root = (props) => {
    return (
        <BrowserRouter>
         <ComponentWrapper />
        </BrowserRouter>
    );
};

export default Root;
