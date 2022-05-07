import React from 'react';
import ExperienceBody from './ExperienceBody';
import Skills from './Skills';
import Education from './Education';
import PersonalProjects from './PersonalProjects';
import Trainings from './Trainings';
import Certificates from './Certificates';
import Languages from './Languages';
import './CvContent.css';

const CvContent = () => {
    return (
        <div className="cvContent">
            <div className="cvContent__column">
                <ExperienceBody />
                <Education />
                <Trainings />
            </div>
            <div className="cvContent__column">
                <Skills />
                <PersonalProjects />
                <Languages />
                <Certificates />
            </div>
        </div>
    )
}

export default CvContent;