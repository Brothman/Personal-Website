import React from 'react';
import WritingIndexItem from './writing_index_item';

class WritingsPage extends React.Component {

    
    render() {
        const writing1 = { 
            title: "Story", 
            blurb: "A tale of two cities, this story explores the dichotomy of wealth and poverty.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        const writing2 = { 
            title: "Tale", 
            blurb: "A story of two villages, this tale explores the monism of mind and matter.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        const writing3 = { 
            title: "Completion", 
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "10 min", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        return (
            <div className="writings-container">
                <h1 className="writing-header">My Writings</h1>
                <div className="writing-index-items-container">
                    <WritingIndexItem writing={writing1} />
                    <WritingIndexItem writing={writing2} />
                    <WritingIndexItem writing={writing3} />
                </div>
            </div>
        );
    }
}

export default WritingsPage;


