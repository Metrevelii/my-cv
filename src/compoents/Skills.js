import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills__headline">
                <h3>SKILLS</h3>
            </div>
            <div className="skills__body">
                <div className="skills__body-row">
                    <div className="skills__body-item">
                        <div className="skills__body-element">HTML5</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">CSS3</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">SASS</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">JavaScript</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">PUG</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">Version Control (Git)</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">Teamwork/collaboration</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">Responsive Design</div>
                    </div>
                    <div className="skills__body-item">
                        <div className="skills__body-element">Typing speed (wpm)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;