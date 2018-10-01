import React from 'react';
import { debug } from 'util';

//destructure writing out of props for cleaner code
const WritingIndexItem = ( { writing, onClick } ) => {
    return ( 
        <div className="writing-index-item" onClick={onClick}>
            <h3 className="writing-title"> {writing.title} </h3>
            <p className="writing-blurb"> {writing.blurb} </p>
            <p className="writing-author"> {writing.author} </p>
            <p className="writing-date-published"> {writing.datePublished}
                <span className="dot"></span>
                <span className="writing-read-time"> {writing.readTime} </span>
             </p>
            <img className="writing-image" src={writing.imageUrl} />
        </div>
     );
}
 
export default WritingIndexItem;