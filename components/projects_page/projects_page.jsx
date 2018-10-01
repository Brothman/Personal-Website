import React from 'react';
import WritingIndexItem from '../writings_page/writing_index_item';

class ProjectsPage extends React.Component {

    visitMortalNote() {
        // window.location = "http://mortal-note.herokuapp.com";
        window.open("http://mortal-note.herokuapp.com");
    }

    visitWigo() {
        // window.location = "http://wigo.surge.sh/";
        window.open("http://wigo.surge.sh/");
    }

    visitGirlOnTheLedge() {
        // window.location = "http://girlontheledge.com/";
        window.open("http://girlontheledge.com/");
    }

    visitPaddleBall() {
        // window.location = "http://first-canvas-game.surge.sh/";
        window.open("http://first-canvas-game.surge.sh/");
    }

    visitPersonalWebsite() {
        window.location = "http://benjirothman.com/";
        // window.open("http://benjirothman.com/");
    }


    render() {
        const writing1 = {
            title: "MortalNote",
            blurb: "A clone of Evernote built with React, Redux and Ruby on Rails.",
            author: "Benji Rothman",
            datePublished: "Sep 21, 2018",
            readTime: "V1.0",
            imageUrl: "https://s3.us-east-2.amazonaws.com/mortalnote-images/wolf-logo.png",
        };
        const writing2 = {
            title: "Wigo",
            blurb: "I built Wigo with three other web developers. It was my first experience managing a group of developers. ",
            author: "Benji Rothman",
            datePublished: "Aug 2, 2017",
            readTime: "V2.0",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/wigo-logo.png"
        };
        const writing3 = {
            title: "Girl on the Ledge",
            blurb: "A static website to advertise my father's film, Girl on the Ledge.",
            author: "Benji Rothman",
            datePublished: "Jul 5, 2018",
            readTime: "V1.0",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/GOTL-favicon.ico"
        };
        const writing4 = {
            title: "Paddle Ball",
            blurb: "A simple game built with HTML, CSS, Javascript and Canvas.",
            author: "Benji Rothman",
            datePublished: "Sep 7, 2018",
            readTime: "V1.0",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/PaddleBall.png"
        };
        const writing5 = {
            title: "Personal Website",
            blurb: "You're here! Welcome to my personal website. Please click on me to return to the homepage.",
            author: "Benji Rothman",
            datePublished: "Oct 3, 2018",
            readTime: "V1.0",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/Larger_Color_Corrected.jpg"
        };
        return (
            <div className="projects-container">
                <h1 className="writing-header project-header" onClick={this.visitMortalNote}>My Projects</h1>
                <div className="writing-index-items-container project-index-item-container" >
                    <WritingIndexItem writing={writing1} onClick={this.visitMortalNote} />
                    <WritingIndexItem writing={writing2} onClick={this.visitWigo} />
                    <WritingIndexItem writing={writing3} onClick={this.visitGirlOnTheLedge}/>
                    <WritingIndexItem writing={writing4} onClick={this.visitPaddleBall}/>
                    <WritingIndexItem writing={writing5} onClick={this.visitPersonalWebsite}/>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;





