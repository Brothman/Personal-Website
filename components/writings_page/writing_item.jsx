import React from 'react';

//destructure writing out of props for cleaner code
const WritingItem = ({ writing }) => {
    return (
        <div className="writing-container">
            <h1 className="specific-writing-title"> {writing.title} </h1>
            <p className="writing-content"> {writing.content} </p>
        </div>
    );
}

export default WritingItem;