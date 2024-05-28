// ExpComp.jsx

import React from 'react';
import './ExpComp.css';
import './Section.js';

const ExpComp = () => {
	const textItems = [
		<p key={1}><h1 id="titleFormat">1. Software Engineering Intern, Pyrames Health</h1><p></p><i><h2 id = "dateFormat">June 2023-Sept 2023</h2></i>
		<div className = "listFormat">
			<li> Designed python scripts to automate data organization and cleaning processes to ensure consistent data formatting</li>
			<li>Utilized data manipulation libraries (pandas, numpy, and dataframes)
			</li>
			<li>Visualized and analyzed datasets comparing blood pressure measurements</li>
		
		</div>
		</p>,
		<p key={2}><h1 id="titleFormat">2. Assistant Manager/Coding Instructor, Code Ninjas</h1><p></p><i><h2 id = "dateFormat">June 2021-Sept 2022</h2></i>
		<div className = "listFormat">
			<li> Developed and taught personalized curriculum in Java, Python, and Scratch for private sessions</li>
			<li>Instructed six weekly coding camps for 60 students in Python, Minecraft Modifications, & Scratch
			</li>
			<li>Engaged with parents and led center operations, guiding a team of instructors</li>
		
		</div>
		</p>,
		<p key={3}><h1 id="titleFormat">3. Web Dev Intern, San Diego County Engineering Council</h1><p></p><i><h2 id = "dateFormat">Apr 2020-Sept 2020</h2></i>
		<div className = "listFormat">
			<li> Led design intake meetings with 20 people on the SDCEC leadership team</li>
			<li>Rebuilt the SDCEC website based on user pain points, gaining 90% user satisfaction
			</li>
		</div>
		</p>
	  ];
	
  return (
    <div className="horizontal-gallery">
      {textItems.map((item, index) => (
        <div key={index} className="gallery-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default ExpComp;
