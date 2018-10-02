import React from 'react';
import WritingIndexItem from './writing_index_item';
import WritingItem from './writing_item';

class WritingsPage extends React.Component {

    
    render() {
        const writing1 = { 
            title: "Second Poem to Jane", 
            blurb: "A tale of two cities, this story explores the dichotomy of wealth and poverty.", 
            author: "Benji Rothman", 
            datePublished: "Oct 18, 2017", 
            readTime: "5 min read", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSps2EjlZ4tEkXWEbgqW8xsPKb8b09xMPfnU3fGpkPXDZlOCh_98wsc_kIAM6R8H-tppI0TY7TIwvly/pub?embedded=true"
         };
        const writing2 = { 
            title: "Yom Kippur in a Buddhist Monastery", 
            blurb: "A story of two villages, this tale explores the monism of mind and matter.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min read", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        const writing3 = { 
            title: "Two Confused Boys", 
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired", 
            author: "Benji Rothman", 
            datePublished: "Oct 8, 2017", 
            readTime: "10 min read", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        const writing4 = {
            title: "Human Nature",
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired",
            author: "Benji Rothman",
            datePublished: "Dec 13, 2017",
            readTime: "10 min read",
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
        };
        const writing5 = {
            title: "Know Thyself",
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired",
            author: "Benji Rothman",
            datePublished: "May 14, 2018",
            readTime: "10 min read",
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
        };

        return (
            <div className="writings-container">
                <h1 className="writing-header">My Writings</h1>
                <div className="writing-index-items-container">
                    <WritingItem writing={writing1} />

                </div>
            </div>
        );
    }
}

export default WritingsPage;


/*

<WritingIndexItem writing={writing1} />
                    <WritingIndexItem writing={writing2} />
                    <WritingIndexItem writing={writing3} />
                    <WritingIndexItem writing={writing4} />
                    <WritingIndexItem writing={writing5} />

*/