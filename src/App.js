import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ExpComp from './components/ExpComp.js';
import Section from './components/Section.js';
import ButtonComp from './components/ButtonComp.js';
function App() {

  // ReactDOM.render(
  //   <ExpComp sections={sections} />,
  //   document.getElementById('root')
  // );

/*Provide more information about yourself, such as a summary of your background, interests, and career goals. Include a link to a PDF of your resume/cover letter (open this link in a new tab)*/
  const aboutHtml = '<div><h1 id = "hi">Background, interests, & goals</h1><p><h2 id = "bodyID"> I grew up in San Diego, California, and currently attend UCR for computer science. I\'m planning on completing my master\'s degree in CS from here as well. I\'m interested in software engineering, and have taken a variety of courses over the past years that focus on this subject. I enjoy working on teams and collaborating with others! This summer I will be a software engineering intern at McMaster-Carr in Chicago! For more information about my experiences and qualifications, take a look at my resume here: </h2> </p> <ButtonComp label="About" /> </div>';
  const eduHTML = '<style>ul {list-style-type: none;margin: 0;padding: 0; font-size:25px;}li {margin-bottom: 10px;}</style></head><body><h1>Education</h1><ul><li>BS + MS Computer Science, June 2025</li></ul><h1>Courses</h1><ul><li>Algorithm Engineering</li><li>Web Development</li><li>Compilers</li><li>Automata Theory</li><li>Assembly Language</li><li>Operating Systems</li></ul><h1>Skills</h1><ul><li>C</li><li>C++</li><li>Java</li><li>Python</li><li>HTML/CSS</li><li>JavaScript</li></ul></body>'+
  '</h2> </p> <ButtonComp label="About" /> </div>';
  return (
    <div className="App">
      <div className = "wrapper">
      {/* NAVBAR */}
          <div className = "navBar">
            <nav>
          
            <a href="#aboutID"> <ButtonComp label="About" /> </a>
            <a href="#eduID"> <ButtonComp label="Education/Skills" /> </a>
            <a href="#expID"> <ButtonComp label="Experience" /> </a>
            <a href="#projID"> <ButtonComp label="Projects" /> </a>
            <a href="#otherID"> <ButtonComp label="Other" /> </a>

          </nav>
          </div>
        {/* </header2> */}



        <header>
          <img src = "Untitled design (11).png" alt = "background" className = "background"></img>
          <img src = "Untitled design (12).png" alt = "background" className = "background2"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background3"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background4"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background5"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background6"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background7"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background8"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background9"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background10"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background11"></img>
          <img src = "Untitled design (13).png" alt = "background" className = "background12"></img>
          {/* <img src = "fish.png" alt = "fish" className = "foreground"></img> */}
        </header>
        
      
      <div className = "foreground">
        {/* IMAGE & start blurb */}
        <img className = "myPicture" src={"picture.png"} alt="Logo" />
        <h3><div className = "start-blurb">Hi! My name is Anika Sood & I am a third year undergrad computer science student at the University of California, Riverside.</div></h3>
        
        <div className = "content">
          {/* ABOUT ME SECTION */}
          <div id = "aboutID"> <Section title = "About Me" html={aboutHtml} buttonName = {"Resume"}/> </div>
          <p></p>

          {/* COURSE SECTION */}
          <div id = "eduID"> <Section title = "Education & Skills" html={eduHTML}/> </div>

          {/* EXP SECTION */}
          <div>
          <div id = "expID">
            <Section title = "Work Experience" html={''} eComp = {1}/> 
            </div>
          </div>
          
          {/* proj SECTION */}
          <div>
          <div id = "projID">
             <Section title = "Projects" html={''} proj = {1}/>
             </div>
          
          </div>
          
          {/* other SECTION */}
          <div>
          
             <Section title = "Other" html={'<h1>In my spare time, I enjoy photography, dance, jewelry making, and hanging out with my friends. Here\'s a gallery of some of these activities :)</h1>'} photogrid = {1}/>
             <div id = "otherID"></div>
          
          </div>
          
          {/* <div className = "sideBySide">
            <Section title = "About" html={aboutHtml}/>
            <Section title = "About" html={aboutHtml}/>

          </div> */}
     
     <div className = "logos">
          <a href="https://www.linkedin.com/in/anikasood-/">
                  <img src="linkedinLogo.webp" alt="Description of the image"></img>
          </a>

          <a href="https://github.com/anikkasood">
            <div id = "git"><img src="githubIcon.webp" alt="Description of the image" ></img> </div>
          </a>

          
          </div>

        </div>
        

      </div>
      
      </div>
        
    </div>
   
  );
}

export default App;
