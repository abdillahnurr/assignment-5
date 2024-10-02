import React from 'react';
import './Awards.css';

function Awards() {
  const awardsData = [
    {
      title: 'Web Development Fundamentals',
      organizer: 'IBM',
      year: 'Sep 2024',
    },
    {
      title: 'Start Programming with Python',
      organizer: 'Dicoding Indonesia',
      year: 'Oct 2023',
    },
    {
      title: 'Front-End Web dan Back-End',
      organizer: 'SIB Dicoding X Kampus Merdeka Batch 3',
      year: 'Aug 2022 – Jan 2023',
    },
    {
      title: 'Oracle Certified Foundations Associate, Database',
      organizer: 'Oracle Corporation as Oracle Certified',
      year: 'Nov 2022',
    },
    {
      title: 'Junior Web Developer – VSGA',
      organizer: 'Indonesian Professional Certification Authority',
      year: 'Oct 2022',
    },
    {
      title: 'Web Development Bootcamp Graduate',
      organizer: 'Bootcamp X',
      year: '2023',
    },
    {
      title: 'Database Design & Programming with SQL',
      organizer: 'Fresh Graduate Academy Digital Talent Scholarship 2022',
      year: 'July 2022 – Aug 2022',
    },
  ];

  return (
    <div className="awards-container">
      <h1>Awards & Certifications</h1>
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div key={index} className="award-card">
            <h2>{award.title}</h2>
            <p className="organizer">{award.organizer}</p>
            <p className="year">{award.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
