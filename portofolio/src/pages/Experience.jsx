import React from 'react';
import './Experience.css';

function Experience() {
  // Step 1: Define the array of experience data
  const experienceData = [
    {
      title: 'Mentor SIB Dicoding X Kampus Merdeka Batch 5',
      role: 'Mentor - Front-end & Back-end Development',
      date: 'August 2023 – January 2024',
      description: 'Guided 25 mentees in both the Front-end and Back-end learning paths, offering weekly consultation sessions to discuss progress and feedback. Ensured mentees were aligned with the course material provided by Dicoding Indonesia.',
      tags: ['MENTOR', 'BACK-END', 'FRONT-END']
    },
    {
      title: 'Dicoding Academy – Front-End Web and Back-End Developer',
      role: 'Developer',
      date: 'August 2022 – January 2023',
      description: 'Completed a comprehensive developer program covering both Front-end and Back-end development. Developed multiple websites, using a mobile-first approach and worked with a team to deliver a full-stack project.',
      tags: ['DEVELOPER', 'FRONT-END', 'BACK-END']
    },
    {
      title: 'Laboratory Assistant “Database Design”',
      role: 'Lab Assistant',
      date: 'September 2022 – December 2022',
      description: 'Assisted in teaching database design to 40 practitioners, providing hands-on sessions and evaluating their understanding through practical projects.',
      tags: ['DATABASE', 'ASSISTANT']
    }
  ];

  // Step 2: Use map to dynamically render each experience block
  return (
    <div className="experience-container">
      <h1>My Experience</h1>
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-block">
          <h2>{experience.title}</h2>
          <h3>{experience.role}</h3>
          <p className="date">{experience.date}</p>
          <p>{experience.description}</p>
          <div className="tags">
            {experience.tags.map((tag, idx) => (
              <span key={idx}>{tag} </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
