import React from 'react';

//destructure writing out of props for cleaner code
const WritingItem = ({ writing }) => {

    return (
        <div className="writing-container">
            <h1 className="specific-writing-title"> {writing.title} </h1>
            
            <div id="Iframe-Liason-Sheet" className="set-margin set-padding set-border set-box-shadow center-block-horiz">
                <div className="responsive-wrapper 
                    responsive-wrapper-wxh-550x2000">
                    <iframe src={writing.content}> 
                    <p ><em><strong>ERROR: </strong>  
                An &#105;frame should be displayed here but your browser version does not support &#105;frames. </em>Please update your browser to its most recent version and try again.</p>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default WritingItem;

/*<iframe width="2000px" height="1000px" src={writing.content}></iframe>*/