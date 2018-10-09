import React from 'react';

class EnigmaPage extends React.Component {

    //Ensure the header resizes itself automatically when navigating to a new page
    componentWillMount() {
        const headerContainer = document.querySelector('.header-container');
        const headerParticles = document.querySelector('.particles-wrapper-header');

        //ensure headerContainer is defined, i.e. already mounted on page
        if (headerContainer && headerContainer.style.height == '275px') {
            headerContainer.style.height = '90px';
            headerParticles.style.height = '90px';
        }
    }

    render() {
        //only add a fillerDiv element if the screen is smaller than 1008 pixels and we've resized to add a header element

        return (
            <div className="enigma-container" />
        );
    }
}

export default EnigmaPage;





