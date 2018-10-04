import React from 'react';
import { withRouter } from 'react-router-dom';
import WritingIndexItem from './writing_index_item';

class WritingsPage extends React.Component {

    constructor(props) {
        super(props);
        this.viewWriting = this.viewWriting.bind(this);
    }

    viewWriting(id) {
        this.props.history.push(`/writings/${id}`);
    }

    render() {
        const writing1 = { 
            title: "Second Poem to Jane", 
            blurb: "A love poem to a girlfriend.", 
            author: "Benji Rothman", 
            datePublished: "Oct 18, 2017", 
            readTime: "5 min read", 
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/love.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSps2EjlZ4tEkXWEbgqW8xsPKb8b09xMPfnU3fGpkPXDZlOCh_98wsc_kIAM6R8H-tppI0TY7TIwvly/pub?embedded=true"
         };
        const writing2 = { 
            title: "Yom Kippur in a Buddhist Monastery", 
            blurb: "A young Jew confronts God in the form of the Buddha.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min read", 
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/JuBu.jpg"
         };
        const writing3 = { 
            title: "Two Confused Boys", 
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired", 
            author: "Benji Rothman", 
            datePublished: "Oct 8, 2017", 
            readTime: "10 min read", 
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/confusion.jpg"
         };
        const writing4 = {
            title: "Human Nature",
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired",
            author: "Benji Rothman",
            datePublished: "Dec 13, 2017",
            readTime: "10 min read",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Human_Nature.jpg"
        };
        const writing5 = {
            title: "Know Thyself",
            blurb: "A short essay about the importance of knowing oneself.",
            author: "Benji Rothman",
            datePublished: "May 14, 2018",
            readTime: "10 min read",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Know-Thyself.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQPfJ5yDEOfhguipnBsSFl-45NjaS5jLc6jc5R8-ZiOk9i0d9GGeQH8FS6vkEKAP_lT4taccdsD3IG_/pub?embedded=true",
        };
        const writing6 = {
            title: "Lost Confidence",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "May 14, 2018",
            readTime: "10 min read",
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };

        const writingArr = [writing1, writing2, writing3, writing4, writing5, writing6];

        return (
            <div className="writings-container">
                <h1 className="writing-header">My Writings</h1>
                <div className="writing-index-items-container">
                    <WritingIndexItem writing={writing1} onClick={this.viewWriting.bind(this, 1)} />
                    <WritingIndexItem writing={writing2} onClick={this.viewWriting.bind(this, 2)} />
                    <WritingIndexItem writing={writing3} onClick={this.viewWriting.bind(this, 3)} />
                    <WritingIndexItem writing={writing4} onClick={this.viewWriting.bind(this, 4)} />
                    <WritingIndexItem writing={writing5} onClick={this.viewWriting.bind(this, 5)} />
                    <WritingIndexItem writing={writing6} onClick={this.viewWriting.bind(this, 6)} />
                </div>
            </div>
        );
    }
}

export default withRouter(WritingsPage);