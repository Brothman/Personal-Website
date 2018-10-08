import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

window.disappearing = false;

//consider adding this event listener to componentDidMount
//And removing it with componentWillUnmount from AboutV2 Component
document.addEventListener("scroll", () => {
    const scrollUp = document.getElementsByClassName('scroll-up')[0];

    if (window.pageYOffset >= window.innerHeight && !window.disappearing) {
        scrollUp.style.visibility = "visible";
        scrollUp.style.opacity = 1;
    }
    else {
        if (scrollUp.style.visibility == "visible" && !window.disappearing) {
            window.disappearing = true;
            scrollUp.style.opacity = 0;

            setTimeout(() => {
                scrollUp.style.visibility = "hidden";
                window.disappearing = false;
            }, 1000);
        }
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
});