import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>About Me</h1>
        <p>Hi, I'm Abdillah Nurr, a Developer with a focus on front-end development and database management. With over 2 years of experience, I specialize in building responsive, user-friendly web applications. I'm always eager to learn and improve my skills in modern web technologies.</p>
      </section>

      <section className="personal-section">
        <h2>Personal Attributes</h2>
        <p>I’m passionate about continuous learning, solving challenging problems, and contributing to the tech community. My goal is to contribute to innovative projects, collaborate with talented teams, and bring ideas to life through code.</p>
      </section>

      <section className="cta-section">
        <h2>Let's Connect</h2>
        <p>If you'd like to work together or chat, feel free to reach out via <a href="mailto:abdillahnurr12@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/abdillah-nur-ridho-766285208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    </div>
  );
}

export default About;
