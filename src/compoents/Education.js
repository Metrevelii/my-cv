import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="cvContent__education">
      <div className="cvContent__education-headline">
        <h3>Education</h3>
      </div>
      <div className="cvContent__education-body">
        <div className="cvContent__education-title">
          <h3>Front-end web development</h3>
        </div>
        <div className="cvContent__education-workplace">
          <h3>GeoLab</h3>
        </div>
        <div className="cvContent__education-description">
          <div className="cvContent__education-description--top">
            <div className="cvContent__education-date">
              <p>10/2020 - 12/2020</p>
            </div>
            <div className="cvContent__education-location">
              <p>Tbilisi</p>
            </div>
          </div>
        </div>
        <div className="cvContent__education-achievements">
          <div className="cvContent__education-achievements--text">
            <p>Courses</p>
          </div>
          <div className="cvContent__education-list">
            <ul>
              <li>
                <div className="cvContent__education-bullet"></div>
                <p className="cvContent__education-text">
                  Course was about learning the basics of Front-End Web Development, Including HTML,CSS and JavaScript features.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cvContent__education-body">
        <div className="cvContent__education-title">
          <h3>Business Administration (Bechelor's degree)</h3>
        </div>
        <div className="cvContent__education-workplace">
          <h3>Ilia State University</h3>
        </div>
        <div className="cvContent__education-description">
          <div className="cvContent__education-description--top">
            <div className="cvContent__education-date">
              <p>09/2016 - 12/2019</p>
            </div>
            <div className="cvContent__education-location">
              <p>Tbilisi</p>
            </div>
          </div>
        </div>
        <div className="cvContent__education-achievements">
          <div className="cvContent__education-achievements--text">
            <p>Courses</p>
          </div>
          <div className="cvContent__education-list">
            <ul>
              <li>
                <div className="cvContent__education-bullet"></div>
                <p className="cvContent__education-text">
                  Management
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
