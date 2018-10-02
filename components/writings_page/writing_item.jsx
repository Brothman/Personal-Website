import React from 'react';
import ReactQuill from 'react-quill';

//destructure writing out of props for cleaner code
const WritingItem = ({ writing }) => {
    return (
        <div className="writing-container">
            <h1 className="specific-writing-title"> {writing.title} </h1>
            <iframe width="2000px" height="1000px" src={writing.content}></iframe>
        </div>
    );
}

export default WritingItem;