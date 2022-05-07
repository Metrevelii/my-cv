import React from "react";
import "./Trainings.css";

const Trainings = () => {
  return (
    <div className="trainings">
      <div className="trainings__headline">
        <h3>Trainings</h3>
      </div>
      <div className="trainings__body">
        <div className="trainings__body-title">
          <h4>Erasmus+ Youth Training (01/2020 - 02/2020)</h4>
        </div>
        <div className="trainings__body-desc">
          <p>
            Comunnicating with foreigner participants. practicing teamworking
            skills with different type of activities.
          </p>
        </div>
      </div>
      <div className="trainings__body">
        <div className="trainings__body-title">
          <h4>Liberty Bank Sales Training (10/2017 - 11/2017)</h4>
        </div>
        <div className="trainings__body-desc">
          <p>
            Training was about sales and management. Getting interesting and
            useful informations about communicating with people.
          </p>
        </div>
      </div>
      <div className="trainings__body">
        <div className="trainings__body-title">
          <h4>Georgian Youth for Europe (07/2017 - 07/2017)</h4>
        </div>
        <div className="trainings__body-desc">
          <p>
            International two week training 'Cross the culture' located in
            Georgia, Rustavi. People from 5 different countries talked about
            their cultures, presented them in different ways. practicing
            communication skills in English with foreign people.
          </p>
        </div>
      </div>
      <div className="trainings__body">
        <div className="trainings__body-title">
          <h4>House of Leaders (10/2015 - 10/2017)</h4>
        </div>
        <div className="trainings__body-desc">
          <p>
            Weekly events planned in House of Justice of Georgia after working
            hours. Events was about reviewing books, movies and having some
            office activities during working hours of House of Justices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
