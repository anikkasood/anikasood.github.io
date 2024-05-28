import React from 'react';
import './Section.css'
import ButtonComp from './ButtonComp.js';
import ExpComp from './ExpComp.js';

function Section(props) {

  const photos = [
    // Replace with your actual image URLs
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
  ];
  return (
    <div className = 'section-format'>
      <h4>{props.title}</h4>
	  <p></p>
	  <div dangerouslySetInnerHTML={{ __html: props.html }} />

    {props.eComp && (
      <div className = "formatScroll">
        <ExpComp/>
        {/* <div className = "leftIcon">{"<"}</div>  */}
        </div>
      
    )}  

    {props.buttonName && (
      <a href="/AnikaSoodResumeFall23.pdf" target = "blank">
        <ButtonComp label={props.buttonName} />
      </a>
    )}    

    {props.proj && (
          <div className = "projects">
            <div className = "proj">
              <h1>File Organization System</h1>
            <h2> JavaScript, Google App Script</h2>
            <p>
            Created a JavaScript program to organize files in desired hierarchical order and automated the process for copying
files, creating folders, and searching documents on Google Drive
            </p>
            </div>
            <div className = "proj">
            <h1>RPG Game</h1>
            <h2> C++, Valgrind, Google Test</h2>
            <p>
            Built a text-based role-playing game. Implemented composite design pattern, and scrum project management. Tested
and optimized application with Googletest submodule and Valgrind
            </p>
            </div>
            <div className = "proj">
            <h1>Shopping Application</h1>
            <h2> Java, Eclipse WindowBuilder</h2>
            <p>
            Developed full stack application inspired by Amazon to stimulate a shopping experience where users can search, sort,
and add items to cart. Implemented Java GUI, searching and sorting algorithms, and data structures to optimize user experience</p>
            </div>


          </div>
        )}    

{props.photogrid && (
      <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-grid-item">
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
      
    )}  
  </div> 
  );
}

export default Section;