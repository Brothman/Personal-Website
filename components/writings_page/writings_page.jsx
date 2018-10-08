import React from 'react';
import { withRouter } from 'react-router-dom';
import WritingIndexItem from './writing_index_item';

class WritingsPage extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            writingIndexItemArr: [],
        };
        this.viewWriting = this.viewWriting.bind(this);
        this.filterByDate = this.filterByDate.bind(this);
        this.filterByTimeToRead = this.filterByTimeToRead.bind(this);
    }

    componentDidMount() {
        //date.getTime() gives the unix timecode stamp
        //0 for month represents january
        const writing24 = {
            id: 24,
            title: "Lost Confidence",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "May 14, 2018",
            readTime: "15 min read",
            intTime: 15,
            intDate: new Date(2018, 4, 14),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing23 = {
            id: 23,
            title: "Know Thyself",
            blurb: "A short essay about the importance of knowing oneself.",
            author: "Benji Rothman",
            datePublished: "Mar 16, 2018",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2018, 2, 16),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Know-Thyself.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQPfJ5yDEOfhguipnBsSFl-45NjaS5jLc6jc5R8-ZiOk9i0d9GGeQH8FS6vkEKAP_lT4taccdsD3IG_/pub?embedded=true",
        };
        const writing22 = {
            id: 22,
            title: "University, the Home of the Challenging Idea...Or So I Thought",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Mar 2, 2018",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2018, 2, 2),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/yale-protest.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSYFJQg7zwlptr_wUzOkn2GVcWwgDChFyZ069hlzXVBqCt83yVsmI923Ujy-em-izw8EJOGyJm_qZsA/pub?embedded=true",
        };
        const writing21 = {
            id: 21,
            title: "Human Nature",
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired",
            author: "Benji Rothman",
            datePublished: "Dec 13, 2017",
            readTime: "30 min read",
            intTime: 30,
            intDate: new Date(2017, 11, 13),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Human_Nature.jpg"
        };
        const writing20 = {
            id: 20,
            title: "Second Poem to Jane",
            blurb: "A love poem to a girlfriend.",
            author: "Benji Rothman",
            datePublished: "Oct 18, 2017",
            readTime: "5 min read",
            intTime: 5,
            intDate: new Date(2017, 9, 18),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/love.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSps2EjlZ4tEkXWEbgqW8xsPKb8b09xMPfnU3fGpkPXDZlOCh_98wsc_kIAM6R8H-tppI0TY7TIwvly/pub?embedded=true"
        };
        const writing19 = {
            id: 19,
            title: "Two Confused Boys",
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired",
            author: "Benji Rothman",
            datePublished: "Oct 8, 2017",
            readTime: "8 min read",
            intTime: 8,
            intDate: new Date(2017, 9, 8),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/confusion.jpg"
        };
        const writing18 = {
            id: 18,
            title: "Yom Kippur in a Buddhist Monastery",
            blurb: "A young Jew confronts God in the form of the Buddha.",
            author: "Benji Rothman",
            datePublished: "May 5, 2017",
            readTime: "20 min read",
            intTime: 20,
            intDate: new Date(2017, 4, 5),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/JuBu.jpg"
        };
        const writing17 = {
            id: 17,
            title: "A Reunion",
            blurb: "A short poem about the difficulties in reconnecting with an old friend.",
            author: "Benji Rothman",
            datePublished: "Dec 27, 2016",
            readTime: "2 min read",
            intTime: 2,
            intDate: new Date(2016, 11, 27),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Caleb+and+Ben.JPG",
            content: "https://docs.google.com/document/d/e/2PACX-1vRL4erU3mg5573byMRGttZyVp6SZ55FCvFVQIc7D4HtmCyXrMvU7xbfD6flb4RhWUf9bn_uoZ2r1ogS/pub?embedded=true",
        };
        const writing16 = {
            id: 16,
            title: "A Disconnect",
            blurb: "A poem that explores some of the complexities about the sexual relationship.",
            author: "Benji Rothman",
            datePublished: "Dec 25, 2016",
            readTime: "2 min read",
            intTime: 2,
            intDate: new Date(2016, 11, 25),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/no-disconnect.png",
            content: "https://docs.google.com/document/d/e/2PACX-1vReE6zhkxn22XN0qFwI61MnPWQa2WRoDBVcWZxf0Wi9RleO0imcftMW1a9O44np2Hcj02ZzDUle6OTO/pub?embedded=true",
        };
        const writing15 = {
            id: 15,
            title: "My Perfect Day",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Aug 15, 2015",
            readTime: "30 min read",
            intTime: 30,
            intDate: new Date(2015, 7, 15),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing14 = {
            id: 14,
            title: "Book Review: A Pale View of Hills",
            blurb: "The book demonstrates the importance of striving to create above our current abilities.",
            author: "Benji Rothman",
            datePublished: "Jul 30, 2015",
            readTime: "5 min read",
            intTime: 5,
            intDate: new Date(2015, 6, 30),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/A-Pale-View-Of-Hills.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRo_qSD3ZSCocI-ajZJ-PF0y5HW5RaMXsm9sAhz6AWKRF6wIgQ4-jO26Y8X3CcwB0_unl48hLCSmCm6/pub?embedded=true",
        };
        const writing13 = {
            id: 13,
            title: "Anxiety",
            blurb: "An essay about how I learned I was an anxious person.",
            author: "Benji Rothman",
            datePublished: "Jul 26, 2018",
            readTime: "15 min read",
            intTime: 15,
            intDate: new Date(2015, 6, 26),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/anxiety.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRDAmegsrrbhdNEd-yPXq-5ccUY8hXKl0-lsUgAARaGat0Mrqn1TaKMkDIIWUE11pwWGJ0kbeyz6Zlz/pub?embedded=true",
        };
        const writing12 = {
            id: 12,
            title: "Adventure",
            blurb: "An essay where I explore my addictive, harmful relationship to marijuana.",
            author: "Benji Rothman",
            datePublished: "Jul 25, 2015",
            readTime: "15 min read",
            intTime: 15,
            intDate: new Date(2015, 6, 25),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/adventure.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQtNxrGyVfBlvH3pzIFUR0DwnIRZ5gS_Iw_S2RAgQbLuQJK60eOXCmlp_kq8NHAH6CtpiC8kCeAvgLS/pub?embedded=true",
        };
        const writing11 = {
            id: 11,
            title: "An Apology to Marijuana",
            blurb: "An early attempt to accept responsibility for my life and my addictions.",
            author: "Benji Rothman",
            datePublished: "Jul 24, 2015",
            readTime: "4 min read",
            intTime: 4,
            intDate: new Date(2015, 6, 24),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/marijuana4.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSVnugR2TSUW0rUqvyZKj8JFMqxUDhXVSoK6xJShux3rFhFRDWB6fUP0Hkl2FJ5TcmtwmeBy_so_lqM/pub?embedded=true",
        };
        const writing10 = {
            id: 10,
            title: "Strength",
            blurb: "The inspiration for my story: An Apology to Marijuana.",
            author: "Benji Rothman",
            datePublished: "Jul 24, 2015",
            readTime: "3 min read",
            intTime: 3,
            intDate: new Date(2015, 6, 24),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/strength.png",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing9 = {
            id: 9,
            title: "The Future",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Jul 23, 2015",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2015, 6, 23),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing8 = {
            id: 8,
            title: "Distractions",
            blurb: "A youthful rebellion against life.",
            author: "Benji Rothman",
            datePublished: "Jul 22, 2015",
            readTime: "4 min read",
            intTime: 4,
            intDate: new Date(2015, 6, 22),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/distraction.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vTDOj3qzvQY4fGq3RvwEEpX-jgE7-72vgQ3J8DZDD7qDTrHGusITU8M7YVJbNxXMlRBryVxEUs7IfEz/pub?embedded=true",
        };
        const writing7 = {
            id: 7,
            title: "Forever Empty",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Jul 20, 2015",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2015, 6, 20),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing6 = {
            id: 6,
            title: "No Judgement",
            blurb: "Six haikus to describe reality without judgement.",
            author: "Benji Rothman",
            datePublished: "Jul 13, 2015",
            readTime: "3 min read",
            intTime: 3,
            intDate: new Date(2015, 6, 13),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/No+Judgement+.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRrNO7RiolqtlqIBMfYGETHwQCfGUzBxqZ4GeM5w9LOiE4g-FAErihn77uK8SCN6ptxLs6INKOPLo8Y/pub?embedded=true",
        };
        const writing5 = {
            id: 5,
            title: "Why Take College Courses?",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Jul 12, 2015",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2015, 6, 12),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Mr-Nobody.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQoQCGzB2GhtU4KW3vtpKuv53IdYbCFFesmfsPm_OXnyenJSMU-SiO6n0duuQptLfdcHJA84M8q914h/pub?embedded=true",
        };
        const writing4 = {
            id: 4,
            title: "You Want Food?",
            blurb: "An essay about how to respond to the questions of my annoying relatives.",
            author: "Benji Rothman",
            datePublished: "Jul 9, 2015",
            readTime: "6 min read",
            intTime: 6,
            intDate: new Date(2015, 6, 9),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Easter-Bunny-Food.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQQ6uN3L8LRn2UDJgg54eMXuLj7YdsLmqX4_MpWyA0ynhVgAEpsB9FQ43wlo13Ee71p28T7_milnkNz/pub?embedded=true",
        };
        const writing3 = {
            id: 3,
            title: "Yellow Cat",
            blurb: "A short story about roaring at a cat.",
            author: "Benji Rothman",
            datePublished: "Jul 8, 2015",
            readTime: "3 min read",
            intTime: 3,
            intDate: new Date(2015, 6, 8),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Yellow_cat.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQ99jLIoMqDT3BsroJt0sxCeCpnfaZf_FjNcqjVAk5RwfB3jm0HPfaNUirdm3faPQSvN0zz1tvdhUoD/pub?embedded=true",
        };
        const writing2 = {
            id: 2,
            title: "Lunch",
            blurb: "An essay about lunch and sex.",
            author: "Benji Rothman",
            datePublished: "Jul 7, 2015",
            readTime: "5 min read",
            intTime: 5,
            intDate: new Date(2015, 6, 7),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/lunch.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQpUpXWIRYZxMq1XiLj6l2ETB50j-hluD7cWO2QsAr2YUGOR6QXrWAkE1PLl4tUUBJGmbFW5QCFYNnn/pub?embedded=true",
        };
        const writing1 = {
            id: 1,
            title: "Thoughts on a Summer Day",
            blurb: "An axiomatic approach to life.",
            author: "Benji Rothman",
            datePublished: "Jul 6, 2015",
            readTime: "8 min read",
            intTime: 8,
            intDate: new Date(2015, 6, 6),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/summer-day.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vToCKnJ7mMAbK7ZCcAT53xNtPIkP6HQQrs2nhbmjYilBmGKbqwkXBhfMPoQ-ZSacdlkPXjV33liUaje/pub?embedded=true",
        };

        const writingArr = [

            writing24,
            writing23,
            writing22,
            writing21,
            writing20,
            writing19,
            writing18,
            writing17,
            writing16,
            writing15,
            writing14,
            writing13,
            writing12,
            writing11,
            writing10,
            writing9,
            writing8,
            writing7,
            writing6,
            writing5,
            writing4,
            writing3,
            writing2,
            writing1,
        ];

        this.setState({
            writingArr: writingArr
        });
    }

    filterByDate() {
        const sortedArr = this.state.writingArr.sort((a, b) => {
            return a.intDate - b.intDate;
        });

        this.setState({
            writingArr: sortedArr
        });
    }

    filterByTimeToRead() {
        const sortedArr = this.state.writingArr.sort((a, b) => {
            return a.intTime - b.intTime;
        });

        this.setState({
            writingArr: sortedArr
        });
    }

    viewWriting(id) {
        this.props.history.push(`/writings/${id}`);
    }

    render() {

        const writingIndexItemArr = this.state.writingArr.map((writing) => {
            return <WritingIndexItem key={writing.id} writing={writing} onClick={this.viewWriting.bind(this, writing.id)} />
        });
        
        return (
            <div className="writings-container">
                <h1 className="writing-header">My Writings</h1>
                <button className="sort-by-date" onClick={this.filterByDate}>Sort By Date</button>
                <div className="writing-index-items-container">
                  {writingIndexItemArr}
                </div>
            </div>
        );
    }
}

export default withRouter(WritingsPage);