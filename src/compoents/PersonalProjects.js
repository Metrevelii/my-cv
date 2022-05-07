import React from "react";
import "./PersonalProjects.css";

const PersonalProjects = () => {
  return (
    <div className="projects">
      <div className="projects__headline">
        <h3>Personal Projects</h3>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>Slot Boyard (04/2022 - Present)</h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              6 Reels 3 Rows slot game with life bar. Each permission to spin
              the slot had 3 try with it. If spinning was unsuccessfull crystals
              were getting broken just like health bar
            </p>
          </div>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>Infinite Winning Space (02/2022 - 05/2022)</h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              Spinning wheel game with 3 different levels - Bronze, Silver and
              Gold. After selecting certain wager from this 3 level, users were
              able to spin winning wheel according to its level. Bronze level -
              lower prizes, Silver level - higher and Gold - the highest. After
              winning some prizes, users were able to play Bonus Round - where
              they were choosing card colors or types and getting 2x or 4x of
              their won prizes.
            </p>
          </div>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>Freespins Tree (12/2021 - 02/2022)</h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              Pyramid game with 6 levels, where prizes and bombs were hidden
              behind boxes. Promo page was christmas specific and pyramid was
              visualised as christmas tree. Promo difficulty: High
            </p>
          </div>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>Slot Twister (10/2021 - 12/2021)</h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              Players of slot games had an opportunity to play slot game with
              three reels with specific features after reaching a checkpoint on
              wager. Wager had 4 checkpoints and surpassing each one was
              possibility to win higher prizes. Promo difficulty: High
            </p>
          </div>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>
            Alexi and Vakhtang Matchavariani Charity Foundation webpage (02/2021
            - 03/2021)
          </h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              Created charity foundation webpage for Georgian composers Alexi
              and Vakhtang Matchavariani. Webpage had 8 pages and was shown in
              two languages Georgian and English.
            </p>
          </div>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body-title">
          <h4>
            Final Project of the Front-End basics course (11/2020 - 12/2020)
          </h4>
        </div>
        <div className="projects__body-description">
          <div className="projects__body-description--bullet"></div>
          <div className="projects__body-description--text">
            <p>
              Final Project was about famous American band Linkin Park. It is
              info page with some good animations and scrolling events. It also
              contains mp3 music player with play/pause feature of some Linkin
              Park hits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
