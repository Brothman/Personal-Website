import React from 'react';
import WritingIndexItem from './writing_index_item';

class WritingsPage extends React.Component {

    
    render() {
        const writing = { 
            title: "Story", 
            blurb: "A tale of two", 
            author: "Ben mudda", 
            datePublished: "Sep 28", 
            readTime: "5 min", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        return (
            <div className="writings-container">
                <WritingIndexItem writing={writing} />
            </div>
        );
    }
}

export default WritingsPage;


