import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <h1>My Experience</h1>

      {/* Mentor Experience */}
      <div className="experience-block">
        <h2>Mentor SIB Dicoding X Kampus Merdeka Batch 5</h2>
        <h3>Mentor - Front-end & Back-end Development</h3>
        <p className="date">August 2023 – January 2024</p>
        <p>Guided 25 mentees in both the Front-end and Back-end learning paths, offering weekly consultation sessions to discuss progress and feedback. Ensured mentees were aligned with the course material provided by Dicoding Indonesia.</p>
        <div className="tags">
          <span>MENTOR </span>
          <span>BACK-END </span>
          <span>FRONT-END</span>
        </div>
      </div>

      {/* Developer Experience */}
      <div className="experience-block">
        <h2>Dicoding Academy – Front-End Web and Back-End Developer</h2>
        <h3>Developer</h3>
        <p className="date">August 2022 – January 2023</p>
        <p>Completed a comprehensive developer program covering both Front-end and Back-end development. Developed multiple websites, using a mobile-first approach and worked with a team to deliver a full-stack project.</p>
        <div className="tags">
          <span>DEVELOPER </span>
          <span>FRONT-END </span>
          <span>BACK-END</span>
        </div>
      </div>

      {/* Lab Assistant Experience */}
      <div className="experience-block">
        <h2>Laboratory Assistant “Database Design”</h2>
        <h3>Lab Assistant</h3>
        <p className="date">September 2022 – December 2022</p>
        <p>Assisted in teaching database design to 40 practitioners, providing hands-on sessions and evaluating their understanding through practical projects.</p>
        <div className="tags">
          <span>DATABASE </span>
          <span>ASSISTANT </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
