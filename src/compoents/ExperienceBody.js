import React from "react";
import "./ExperienceBody.css";

const ExperienceBody = () => {
  return (
    <div className="cvContent__experience">
      <div className="cvContent__experience-headline">
        <h3>WORK EXPERIENCE</h3>
      </div>
      <div className="cvContent__experience-body">
        <div className="cvContent__experience-title">
          <h3>UI Developer</h3>
        </div>
        <div className="cvContent__experience-workplace">
          <h3>Adjarabet.com</h3>
        </div>
        <div className="cvContent__experience-description">
          <div className="cvContent__experience-description--top">
            <div className="cvContent__experience-date">
              <p>03/2021 - Present</p>
            </div>
            <div className="cvContent__experience-location">
              <p>Tbilisi</p>
            </div>
          </div>
          <div className="cvContent__experience-description--bottom">
            <div className="cvContent__experience-desc">
              <p>
                Successful, safe and innovative gaming portal in the Caucasus
                region. (Gambling Facilities and Casinos)
              </p>
            </div>
          </div>
        </div>
        <div className="cvContent__experience-achievements">
          <div className="cvContent__experience-achievements--text">
            <p>Achievements/Tasks</p>
          </div>
          <div className="cvContent__experience-list">
            <ul>
              <li>
                <div className="cvContent__experience-bullet"></div>
                <p className="cvContent__experience-text">
                  Creating promo web pages in a specific deadline due to its
                  difficulty. Target audience - existing and new mass segment
                  players of adjarabet.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBody;
