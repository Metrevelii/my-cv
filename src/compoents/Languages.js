import React from 'react';
import './Languages.css';

const Languages = () => {
    return (
        <div className="languages">
            <div className="languages__headline">
                <h3>Languages</h3>
            </div>
            <div className="languages__body">
                <div className="languages__body-item">
                    <div className="languages__body-lang">English</div>
                    <div className="languages__body-level">Upper Intermediate</div>
                </div>
                <div className="languages__body-item">
                    <div className="languages__body-lang">Georgian</div>
                    <div className="languages__body-level">Native Proficiency</div>
                </div>
                <div className="languages__body-item">
                    <div className="languages__body-lang">Russian</div>
                    <div className="languages__body-level">Limited Working Proficiency</div>
                </div>
            </div>
        </div>
    )
}

export default Languages;