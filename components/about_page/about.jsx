import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div className="about-container">
                <h1 className="hi">Hi</h1>
                <p>I'm a full stack web developer based in Brooklyn, NY.</p>

                <h1 className="what-i-can-do">What I can do.</h1>
                <div className="skill-icons">

                </div>

                <h1 className="what-i-can-do">My resume.</h1>
                <div className="resume-icons">
                </div>

                <h1>I can help.</h1>
                <p>I'm currently available for freelance work.</p>
                <p>Please get in touch if I can be of service to you.</p>

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

            </div>
        );
    }
}

export default About;


