import React from 'react';

const About = () => {
  return (
    <div className="about container">
      <p className="content title">
        We'll be discussing a few key terms and fundamentals:
      </p>
      <ul className="content list">
        <li className="content list item">The browser environment</li>
        <li className="content list item">The Window object</li>
        <li className="content list item">The Browser Object Model (BOM)</li>
        <li className="content list item">React's Children prop</li>
      </ul>
    </div>
  );
};

export default About;
