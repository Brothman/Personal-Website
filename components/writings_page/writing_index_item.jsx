import React from 'react';
import { debug } from 'util';

//destructure writing out of props for cleaner code
const WritingIndexItem = ( { writing } ) => {
    return ( 
        <div className="writing-index-item">
            <h3 className="writing-title"> {writing.title} </h3>
            <p className="writing-blurb"> {writing.blurb} </p>
            <p className="writing-author"> {writing.author} </p>
            <p className="writing-date-published"> {writing.datePublished} </p>
            <p className="writing-read-time"> {writing.readTime} </p>
            <img src={writing.imageUrl} />
        </div>
     );
}
 
export default WritingIndexItem;