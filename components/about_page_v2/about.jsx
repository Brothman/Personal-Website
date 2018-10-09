import React from 'react';

class About extends React.Component {

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

    visitReact() {
        // window.location = "https://reactjs.org/";
        window.open("https://reactjs.org/");
    }

    visitAtom() {
        // window.location = "https://atom.io/";
        window.open("https://atom.io/");
    }

    visitGithub() {
        // window.location = "https://github.com/";
        window.open("https://github.com/");
    }

    visitHeroku() {
        // window.location = "https://heroku.com/";
        window.open("https://heroku.com/");
    }

    visitJavascript() {
        // window.location = "https://en.wikipedia.org/wiki/JavaScript";
        window.open("https://en.wikipedia.org/wiki/JavaScript");
    }

    visitJQuery() {
        // window.location = "https://jquery.com/";
        window.open("https://jquery.com/");
    }

    visitPSQL() {
        // window.location = "https://www.postgresql.org/";
        window.open("https://www.postgresql.org/");
    }

    visitRuby() {
        // window.location = "https://www.ruby-lang.org";
        window.open("https://www.ruby-lang.org");
    }

    visitCSS() {
        // window.location = "https://en.wikipedia.org/wiki/Cascading_Style_Sheets";
        window.open("https://en.wikipedia.org/wiki/Cascading_Style_Sheets");
    }

    visitHTML() {
        // window.location = "https://en.wikipedia.org/wiki/HTML5";
        window.open("https://en.wikipedia.org/wiki/HTML5");
    }

    visitRails() {
        // window.location = "https://rubyonrails.org/";
        window.open("https://rubyonrails.org/");
    }

    visitNode() {
        // window.location = "https://nodejs.org/";
        window.open("https://nodejs.org/");
    }

    visitAWS() {
        // window.location = "https://aws.amazon.com/";
        window.open("https://aws.amazon.com/");
    }

    visitResume() {
        // window.location = "https://docs.google.com/document/d/1Y8s4-hK9l1nDmYPUC24o1jXvIjKGPUpxEEAoPhoP1C0/edit?usp=sharing";
        window.open("https://docs.google.com/document/d/1Y8s4-hK9l1nDmYPUC24o1jXvIjKGPUpxEEAoPhoP1C0/edit?usp=sharing");
    }

    //all three methods work
    scrollDown() {
        // const tempWrapper = document.getElementsByClassName('temporary-wrapper')[0];
        // tempWrapper.scrollIntoView();
        // window.scroll(0 , window.innerHeight); 
        window.scrollTo(
            {
                top: window.innerHeight, 
                behavior: "smooth"
            });
    }

    scrollUp() {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            });
    }


    render() {
        return (
            <div className="about2-container">
                <div className="about-landing-page">
                    <h1 className="greeting">Hi, I'm Benji! </h1>
                    <h2 className="brief-bio">A fullstack web developer and writer based in Brooklyn, NYC. I specialize in React/Redux & Ruby on Rails. </h2>
                    <button className="learn-more" onClick={this.scrollDown}>LEARN MORE</button>
                </div>

            <div className="myPitch-wrapper">
                <h1 className="what-i-can-do">Do you need an elegant and efficient website?</h1>
                <div className="skill-icons">
                    <i onClick={this.visitReact} className="skill-icon devicon-react-original-wordmark colored"></i>
                    <i onClick={this.visitAtom} className="skill-icon devicon-atom-original-wordmark colored"></i>
                    <svg onClick={this.visitCSS} className="svg-skill-icon" viewBox="0 0 128 128">
                        <path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path>
                    </svg>
                    <i onClick={this.visitGithub} className="skill-icon devicon-github-plain-wordmark colored"></i>
                    <i onClick={this.visitHeroku} className="skill-icon devicon-heroku-plain-wordmark colored"></i>
                    <svg onClick={this.visitHTML} className="svg-skill-icon" viewBox="0 0 128 128">
                        <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z"></path><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
                    </svg>
                    <i onClick={this.visitAWS} className=" skill-icon devicon-amazonwebservices-plain-wordmark colored"></i>
                    <i onClick={this.visitJQuery} className=" skill-icon devicon-jquery-plain-wordmark colored"></i>
                    <i onClick={this.visitJavascript} className=" skill-icon devicon-javascript-plain colored"></i>
                    <svg onClick={this.visitRails} className="svg-skill-icon" viewBox="0 0 128 128">
                        <path fill="#A62C39" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 5.162 38.433-23.859 38.433-29.021.001-70.158-.267-70.158-.267z"></path><path fill="url(#a)" d="M350.603 449.926s4.655.932 8.688 7.757c4.034 6.826 25.444 59.886 25.444 59.886v-43.131l-19.858-32.27 5.585 6.827 10.55-8.689-13.653-.93-16.756 10.55z"></path><path opacity=".668" fill="url(#b)" enableBackground="new" d="M309.335 439.686s30.719 20.479 45.613 24.513c14.894 4.035 30.408 8.378 30.408 8.378l-35.373 86.88 15.204.621 19.86-49.026-.622-71.676-75.09.31z"></path><path fill="#fff" fillOpacity=".44" d="M337.881 531.221l31.956 30.733-59.571-1.256s-1.861-18.927-1.241-28.856l3.723-9.929 25.133 9.308z"></path><path fillOpacity=".362" d="M94.085 125.365l-28.856-29.788-26.375-9.929-20.479-45.612 21.721-36.304-14.584-.621-5.896 5.586-2.172 4.344-1.552 112.945 78.193-.621z"></path><path opacity=".5" fill="#83222D" enableBackground="new" d="M111.773 77.89s-29.167 9.309-46.543 17.997c-17.376 8.688-26.685 29.787-26.685 29.787s37.234-1.861 51.197-1.241c13.963.621 20.479.621 21.72-18.927 1.241-19.548.311-27.616.311-27.616z"></path><path d="M26.435 96.422v18.326h4.674v-4.773l4.254 4.254h7.172l-5.688-5.688s4.093-.067 4.402-5.984c0-5.43-4.097-6.134-8.83-6.134h-5.984zm4.897 4.971h4.031v3.265h-4.031v-3.265z"></path><path d="M51.562 96.496c-2.559-.015-6.108.223-6.108 5.045v12.737h4.797v-3.116h4.65v3.042h4.822v-13.354c0-4.189-4.654-4.353-7.147-4.353l-1.014-.001zm-1.237 4.6h4.501v5.021h-4.501v-5.021z"></path><path d="M64.531 96.507h4.964v17.531h-4.964z"></path><path d="M74.692 96.741v17.531h11.947v-4.654h-7.059v-12.955l-4.888.078z"></path><path d="M102.463 96.585v4.732h-7.99v1.707h3.413c1.785 0 5.508-.077 5.508 5.508s-2.561 5.896-7.758 5.896h-6.283v-4.267h7.214c2.172 0 2.292-.708 2.292-1.324 0-.615-1.11-.902-3.369-.902s-6.447-1.11-6.447-5.454 2.172-5.973 6.516-5.973c4.345-.001 6.904.077 6.904.077z"></path><path d="M30.787 91.233h41.269s-9.154-20.789-6.826-39.873c2.326-19.082 17.376-27.771 25.909-28.702 8.533-.931 13.187 4.344 13.187 4.344l1.861-2.792s-12.256-12.412-27.771-11.015c-15.514 1.395-26.219 11.635-32.89 24.046-6.671 12.412-10.55 21.101-13.188 34.132-2.637 13.033-1.551 19.86-1.551 19.86z"></path><path d="M22.565 70.444l8.066.62-1.396 8.068-7.602-.931.932-7.757z"></path><path d="M35.286 53.377l2.172-6.05-7.137-2.793-2.327 6.516 7.292 2.327z"></path><path d="M45.37 32.588l4.189-4.965-5.43-3.568-4.343 4.81 5.584 3.723z"></path><path d="M56.385 13.351l3.724 4.499 5.12-2.947-3.724-4.189-5.12 2.637z"></path><path d="M74.538 8.231l.93 4.499 6.361-.155-.62-4.034-6.671-.31z"></path><path d="M96.102 13.04l-.155 2.792 4.343 2.328.931-1.396-5.119-3.724z"></path><path d="M95.172 24.986v2.327l4.189.465v-1.861l-4.189-.931z"></path><path d="M81.829 27.002l2.017 3.724 2.948-2.327-.621-2.482-4.344 1.085z"></path><path d="M75.468 31.812l3.103 4.655-1.862 3.257-4.499-4.965 3.258-2.947z"></path><path d="M69.262 44.69l-2.017 4.033 5.275 4.5 1.241-5.121-4.499-3.412z"></path><path d="M67.09 58.807l-.31 5.43 6.516 2.792-.311-5.119-5.895-3.103z"></path><path d="M68.952 78.045l1.552 5.586 8.223.465-2.949-6.051h-6.826z"></path><path stroke="#5E000E" strokeWidth="3" d="M17.444 125.054s.188-29.538.188-59.564c0-58.159-4.901-62.491 21.194-62.491h72.635v83.889c0 27.615 3.921 38.433-23.859 38.433-27.78.001-70.158-.267-70.158-.267z" fill="none"></path>
                    </svg>
                    <i onClick={this.visitRuby} className="skill-icon devicon-ruby-plain-wordmark colored"></i>
                    <svg onClick={this.visitNode} className="svg-skill-icon" viewBox="0 0 128 128">
                        <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"></path>
                    </svg>
                    <i onClick={this.visitPSQL} className=" skill-icon devicon-postgresql-plain-wordmark colored"></i>


                </div>

                <h1 className="resume-header">My resume.</h1>
                <div className="resume-icons">
                    <i onClick={this.visitResume} className="skill-icon far fa-file"></i>
                </div>

                <h1 className="help">I can help.</h1>
                <span className="freelance">You can reach me via:</span>

                <div className="social-icons">
                    <a target="_blank" className="social-button-about" href="https://github.com/Brothman/">
                        <i className="fab fa-github"></i>
                    </a>
                    <a target="_blank" className="social-button-about" href="https://www.linkedin.com/in/brothman7000/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-button-about" href="mailto:brothman7000@gmail.com?Subject=Hello%20from%20Portfolio%20Website">
                        <i className="far fa-envelope"></i>
                    </a>
                </div>

            </div>

                <div className="scroll-up" onClick={this.scrollUp} style={{visibility: "hidden", opacity: 0}}>
                    <i className="fas fa-arrow-up" ></i>
                </div>
      

            </div>
        );
    }
}

export default About;


