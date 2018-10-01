import React from 'react';
import WritingIndexItem from './writing_index_item';

class WritingsPage extends React.Component {

    
    render() {
        const writing1 = { 
            title: "Story", 
            blurb: "A tale of two cities, this story explores the dichotomy of wealth and poverty.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min read", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg",
            content: "A blog (a portmanteau of the term web log) is a personal journal published on the World Wide Web consisting of discrete entries (“posts”) typically displayed in reverse chronological order so the most recent post appears first. Blogs are usually the work of a single individual, occasionally of a small group, and often are themed on a single subject. Blog can also be used as a verb, meaning to maintain or add content to a blog. The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users. Although not a must, most good quality blogs are interactive, allowing visitors to leave comments and even message each other via GUI widgets on the blogs and it is this interactivity that distinguishes them from other static websites. In that sense, blogging can be seen as a form of social networking. Indeed, bloggers do not only produce content to post on their blogs but also build social relations with their readers and other bloggers. The term “weblog” was coined by Jorn Barger on 17 December 1997. The short form, “blog,” was coined by Peter Merholz, who jokingly broke the word weblog into the phrase we blog in the sidebar of his blog Peterme.com in April or May 1999. Shortly thereafter, Evan Williams at Pyra Labs used “blog” as both a noun and verb (“to blog,” meaning “to edit one’s weblog or to post to one’s weblog”) and devised the term “blogger” in connection with Pyra Labs’ Blogger product, leading to the popularization of the terms. Many blogs provide commentary on a particular subject; others function as more personal online diaries; yet still others function more as online brand advertising of a particular individual or company. A typical blog combines text, images, and links to other blogs, Web pages, and other media related to its topic. The ability of readers to leave comments in an interactive format is an important part of many blogs. Most blogs are primarily textual, although some focus on art (art blog), photographs (photoblog), videos (video blogging or vlogging), music (MP3 blog), and audio (podcasting). Microblogging is another type of blogging, featuring very short posts. As of 16 February 2011, there were over 156 million public blogs in existence. Before blogging became popular, digital communities took many forms, including Usenet, commercial online services such as GEnie, BiX and the early CompuServe, e-mail lists and Bulletin Board Systems (BBS). In the 1990s, Internet forum software, created running conversations with “threads.” Threads are topical connections between messages on a virtual “corkboard.” The modern blog evolved from the online diary, where people would keep a running account of their personal lives. Most such writers called themselves diarists, journalists, or journalers. Justin Hall, who began personal blogging in 1994 while a student at Swarthmore College, is generally recognized as one of the earlier bloggers, as is Jerry Pournelle."
         };
        const writing2 = { 
            title: "Tale", 
            blurb: "A story of two villages, this tale explores the monism of mind and matter.", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "5 min read", 
            imageUrl: "https://cdn-images-1.medium.com/focal/152/156/51/50/1*8FGsHHpV1ckNcvj2mThRhQ.jpeg"
         };
        const writing3 = { 
            title: "Completion", 
            blurb: "The last bit of fake data. This shall be the ignition into life we've always desired", 
            author: "Benji Rothman", 
            datePublished: "Sep 28", 
            readTime: "10 min read", 
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


