import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faGitAlt, faFigma, faBootstrap, faPhp, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skills = [
    { name: "VS Code", icon: faVuejs, link: "https://code.visualstudio.com/docs" },
    { name: "Git", icon: faGitAlt, link: "https://git-scm.com/doc" },
    { name: "HTML", icon: faHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: faCss3Alt, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bootstrap", icon: faBootstrap, link: "https://getbootstrap.com/docs/" },
    { name: "JavaScript", icon: faJsSquare, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React JS", icon: faReact, link: "https://reactjs.org/docs/getting-started.html" },
    { name: "MySQL", icon: faDatabase, link: "https://dev.mysql.com/doc/" },
    { name: "Figma", icon: faFigma, link: "https://www.figma.com/docs" },
    { name: "Vercel", icon: faVuejs, link: "https://vercel.com/docs" },
    { name: "PHP", icon: faPhp, link: "https://www.php.net/manual/en/" },
    { name: "Postman", icon: faVuejs, link: "https://learning.postman.com/docs/getting-started/introduction/" }
  ];

  return (
    <div className="skills-container">
      <h1>Tools & Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.name}>
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={skill.icon} size="7x" /> {skill.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
