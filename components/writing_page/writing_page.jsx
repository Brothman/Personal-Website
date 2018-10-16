import React from 'react';
import { withRouter } from 'react-router-dom';
import WritingItem from './writing_item';

class WritingPage extends React.Component {

    //Ensure the header resizes itself automatically when navigating to a new page
    componentWillMount() {
        const headerContainer = document.querySelector('.header-container');
        const headerParticles = document.querySelector('.particles-wrapper-header');

        //ensure headerContainer is defined, i.e. already mounted on page
        if (headerContainer && headerContainer.style.height == '275px') {
            headerContainer.style.height = '90px';
            headerParticles.style.height = '90px';
        }
    }

    render() {
        //date.getTime() gives the unix timecode stamp
        //0 for month represents january
        const writing34 = {
            id: 34,
            title: "Post Vision Quest",
            blurb: "Brandon Email Saga #5: A leader is born.",
            author: "Benji Rothman",
            datePublished: "May 14, 2018",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2018, 4, 14),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Albuquerque+Mountains.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSEa3O31NpEQWDhGR44-TUgLgAhq_nqSopuYGbOJp-HfARSphW4LAqTYLx-H9OGJoQYtCUJY7BsUNIE/pub?embedded=true",
        };
        const writing33 = {
            id: 33,
            title: "Good Ideas From The Alchemist",
            blurb: "Philosophy, a book, and a poem.",
            author: "Benji Rothman",
            datePublished: "Apr 29, 2018",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2018, 3, 29),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/the-alchemist-coverjpg.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vS6ca19hhroN2ktjyr6_CZ0JQs-cpwtukL6zwntFSpfonxBAEJQdRaYewPfJka5fZyZQ77MVh8M3UH4/pub?embedded=true",
        };
        const writing32 = {
            id: 32,
            title: "Insights and Questions",
            blurb: "Brandon Email Saga #4: There is only the peace that must be won again and again, each new day of our lives.",
            author: "Benji Rothman",
            datePublished: "Apr 29, 2018",
            readTime: "30 min read",
            intTime: 30,
            intDate: new Date(2018, 3, 29),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/questions.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQeMKl949Z2lDSDst9q4_dFfRt74E2ZyCYQCoEEygzclazSKx8Za3OztVqGFgS-WrDzgw2yf2nsnfS6/pub?embedded=true",
        };
        const writing31 = {
            id: 31,
            title: "Runner's High and Lover's Low",
            blurb: "Brandon Email Saga #3: God fucked me over. God took something from me. Does God need my forgiveness?",
            author: "Benji Rothman",
            datePublished: "Apr 27, 2018",
            readTime: "18 min read",
            intTime: 18,
            intDate: new Date(2018, 3, 27),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Runners+High+and+Lovers+Low.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vTN873ku0uey9M4iL0Yh99KbdnhAs73s_JvfeW2BEgJWN0QN2s5PoujF0Ae0pLNjNl4QTI1k5BY7u-e/pub?embedded=true",
        };
        const writing30 = {
            id: 30,
            title: "The Struggle",
            blurb: "Brandon Email Saga #2: A man refuses to let his fate be his destiny.",
            author: "Benji Rothman",
            datePublished: "Apr 21, 2018",
            readTime: "20 min read",
            intTime: 20,
            intDate: new Date(2018, 3, 21),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Struggle.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQrAy1ACMyw9fMc6grv2uTOFlQO_sqm1p1y4zl8lKlnVxQOC77yDy0ggdeLjtNnK2SfjdRVt_jdcF2g/pub?embedded=true",
        };
        const writing29 = {
            id: 29,
            title: "To Live Is To Love",
            blurb: "Brandon Email Saga #1: When do I feel most alive? When I love.",
            author: "Benji Rothman",
            datePublished: "Apr 16, 2018",
            readTime: "25 min read",
            intTime: 25,
            intDate: new Date(2018, 3, 16),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Love.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQiU3t4F05entTX2GH3TFCO9C_-fMvPDXonfFkuQEG98Z3Y2mqinhn9PuN5pnznYDTyOEc2PrPtk2l4/pub?embedded=true",
        };
        const writing28 = {
            id: 28,
            title: "Thoughts on Running Away",
            blurb: "A scared soul shares why he runs away from his demons.",
            author: "Benji Rothman",
            datePublished: "Jun 30, 2017",
            readTime: "4 min read",
            intTime: 4,
            intDate: new Date(2017, 5, 30),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Running+Away.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vSW5gtweuWS4xf2inTmVGUL_8byeZQxH2VV7glDb81mvYqINdWC5MZwteBBngZrNoWBEUSr4eKRxrZ-/pub?embedded=true",
        };
        const writing27 = {
            id: 27,
            title: "Friendship",
            blurb: "An eighteen year old attempts to define what friendship means to him.",
            author: "Benji Rothman",
            datePublished: "Jul 3, 2015",
            readTime: "3 min read",
            intTime: 3,
            intDate: new Date(2015, 6, 3),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Friendship.jpeg",
            content: "https://docs.google.com/document/d/e/2PACX-1vTghTJbeYqQIyN9FmPXtgBfUEDQuNrMPIztFUq0ljsBTQFDeemu4ViE0LGEym17seXUpEcNyYzWADPt/pub?embedded=true",
        };
        const writing26 = {
            id: 26,
            title: "The Answering Machine",
            blurb: "Pierre leaves a surprising voicemail for his wife, Anita.",
            author: "Pierre",
            datePublished: "Jun 19, 2015",
            readTime: "4 min read",
            intTime: 4,
            intDate: new Date(2015, 5, 19),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Answering+Machine.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQWTu8vr2PjFO2jQjzC5hcDBuBS8lEZKkxq-VrPZDcCycnkoCMnO8yXmXFgKaeGO5bXGUEXIH4gz2lz/pub?embedded=true",
        };
        const writing25 = {
            id: 25,
            title: "If I Were To Die Tomorrow",
            blurb: "A poem about mortality.",
            author: "Benji Rothman",
            datePublished: "Jun 18, 2015",
            readTime: "6 min read",
            intTime: 6,
            intDate: new Date(2015, 5, 18),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Death.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRfb1ouHi1sBFave2XL0eCCJzHaMs8vunz46L1PdNAI-mXelDrJUAa3E-UfT8arAe9Rt94QOoEAxd0V/pub?embedded=true",
        };
        const writing24 = {
            id: 24,
            title: "Lost Confidence",
            blurb: "An essay written shortly after my father died.",
            author: "Benji Rothman",
            datePublished: "Apr 21, 2018",
            readTime: "15 min read",
            intTime: 15,
            intDate: new Date(2018, 3, 21),
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
            blurb: "An essay that explores the rise of political correctness on college campuses.",
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
            blurb: "A young man's tale of friendship.",
            author: "Benji Rothman",
            datePublished: "Oct 8, 2017",
            readTime: "8 min read",
            intTime: 8,
            intDate: new Date(2017, 9, 8),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/confusion.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vQj-4Ae3WvWeEN77YO26lB6-nDdg5EvTr91FRFR5GgYSe5CW6AJ0Q0xyIamHi0rRlG7afPwH1JDQbkG/pub?embedded=true"
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
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/JuBu.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vTVw6MUL7GVYu81kYyJtuVoE2AsO518fMQYG40rFzCvD9ox4SgtwVP3_XhkfztLkE0bsM1G-bx9U4km/pub?embedded=true"
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
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/perfect-day.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRF8_OPXFgjA4Zh06rXhparGsRQicrgNZuQlyks72hDEtOuijYWwZ8wKWAnYC0tsWTVMif9N6NxqZrV/pub?embedded=true",
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
            content: "https://docs.google.com/document/d/e/2PACX-1vRSffklEkjoicG1fXYO7yOpWOYj--V3VmsEnL1APtWTTNIQxyzARWEFqiRkNDiVvA8n4uq5mlmbYqbf/pub?embedded=true",
        };
        const writing9 = {
            id: 9,
            title: "The Future",
            blurb: "An essay about my unhealthy relationship to a dimension of time.",
            author: "Benji Rothman",
            datePublished: "Jul 23, 2015",
            readTime: "6 min read",
            intTime: 6,
            intDate: new Date(2015, 6, 23),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/The-Future-Is-Bright.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRp5Z-DmrksQx4fi7MHVkNHCXTOL8-DPUp0wXnYd9JVOOIsL1Z3K8OalBR9bXtsOKo7GwfXT4awiGpI/pub?embedded=true",
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
            blurb: "Am I an unhappy person?",
            author: "Benji Rothman",
            datePublished: "Jul 20, 2015",
            readTime: "6 min read",
            intTime: 6,
            intDate: new Date(2015, 6, 20),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/Forever+Empty.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vTIY0RIS-DXpYtXtBAJNblW_oXgokPrGPDX3xurdjHUFLj1A2kx8TyhSj3WpGrbILQDmQiGYZsfl2S6/pub?embedded=true",
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
            title: "Why Should I Go To College?",
            blurb: "A young mind rationalizes the exorbidant expense of college.",
            author: "Benji Rothman",
            datePublished: "Jul 12, 2015",
            readTime: "10 min read",
            intTime: 10,
            intDate: new Date(2015, 6, 12),
            imageUrl: "https://s3.us-east-2.amazonaws.com/benji-personal-website/writing-images/college_graduate.jpg",
            content: "https://docs.google.com/document/d/e/2PACX-1vRnnk4n20yATECpFaEgp5DwWekRTuFSeebyFO87C8elNsQd8AxTSJfbk3PZXLwsubMBfcftrJDa9Dv_/pub?embedded=true",
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
            writing34,
            writing33,
            writing32,
            writing31,
            writing30,
            writing29,
            writing28,
            writing27,
            writing26,
            writing25,
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

        const length = writingArr.length;

        return (
            <div className="one-writing-container">
                <div className="filler-div-header" style={{ minHeight: "90px", width: "100%" }} />
                <WritingItem writing={writingArr[length - this.props.match.params.id]} />
            </div>
        );
    }
}

export default withRouter(WritingPage);
