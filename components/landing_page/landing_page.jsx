import React from 'react';
import { withRouter } from 'react-router-dom';

class LandingPage extends React.Component {

    componentDidMount(){
        //Wait two seconds for a person to enter my website, then head to the about webpage. 
        //However this needs to be canceled if we unmount.
       this.timeoutID = setTimeout(() => this.props.history.push("/about"), 2000);
    }

    componentWillUnmount(){
        //ensure we don't push the user to /about once they've already navigated away from the loading page
        clearTimeout(this.timeoutID);
    }

    render() { 
        return (
            <div className="animation-container">
                <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                    <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                    <circle cx="170" cy="170" r="135" stroke="#404041" />
                    <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                    <circle cx="170" cy="170" r="85" stroke="#404041" />
                </svg>
            </div>
          );
    }
}
 
export default withRouter(LandingPage);


