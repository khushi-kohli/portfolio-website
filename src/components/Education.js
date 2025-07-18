import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education" id="education">
    <div className="education__timeline">
      <div className="education__card glass">
        <h2 className="education__title neon">Education</h2>
        <div className="education__item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Maharaja Surajmal Institute, Delhi</p>
          <p className="education__grad">Expected Graduation: June 2026</p>
          <p className="education__cgpa">CGPA: <span className="neon">9.6</span></p>
        </div>
      </div>
      <div className="education__card glass">
        <div className="education__item">
          <h3>Class XII</h3>
          <p>Aadharshila Vidyapeeth</p>
          <p className="education__grad">93.6%</p>
        </div>
      </div>
      <div className="education__card glass">
        <div className="education__item">
          <h3>Class X</h3>
          <p>Aadharshila Vidyapeeth</p>
          <p className="education__grad">93%</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 