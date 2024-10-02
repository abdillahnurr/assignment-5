import React from 'react';
import './Interest.css';

function Interest() {
  const interestsData = [
    {
      title: 'Web Programming',
      description:
        "I'm passionate about building responsive, user-friendly web applications. I enjoy working with modern JavaScript frameworks like React and exploring the best practices for both front-end and back-end development.",
    },
    {
      title: 'Database Design & Programming',
      description:
        "Database management is a core aspect of my interests. I love designing efficient databases, optimizing queries, and ensuring data integrity in applications using MySQL.",
    },
    {
      title: 'Business Analysis',
      description:
        "I have a strong interest in analyzing business needs and translating them into technical solutions. By leveraging data and understanding business requirements, I strive to help teams make informed decisions and build solutions that align with business goals.",
    },
  ];

  return (
    <div className="interest-container">
      <h1>My Interests</h1>
      {interestsData.map((interest, index) => (
        <div key={index} className="interest-block">
          <h2>{interest.title}</h2>
          <p>{interest.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Interest;