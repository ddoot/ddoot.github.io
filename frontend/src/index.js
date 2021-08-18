import React from 'react';
import ReactDOM from 'react-dom';

import Block from './components/Block'
import SkillBar from './components/SkillBar';
import SkillPie from './components/SkillPie';
import ExpList from './components/ExpList';
import Interest from './components/Interest';
import Profile from './components/Profile';

import { nanoid } from 'nanoid';

import './resume.scss';

const expBlocks = [
    {
        className: 'work',
        faIcon: 'briefcase',
        name: 'Experience',
        experience: [
            { title: 'Software Engineering Intern', institution: 'Applied Research Laboratories', duration: 'Jul 2021 - September 2021' },
            { title: 'Freelance Consultant', institution: 'Upwork', duration: 'Apr 2021 - Now' },
            { title: 'Software Intern', institution: 'Bilingual Annotations Task Force', duration: 'Aug 2018 - Jan 2019' },
            { title: 'Research Intern', institution: 'University of Texas at Dallas', duration: 'Mar 2016 - Apr 2019' }
        ]
    },
    {
        className: 'edu',
        faIcon: 'graduation-cap',
        name: 'Education',
        experience: [
	    { title: 'Bachelor of Science in Computer Science', institution: 'University of Texas at Austin', duration: 'Aug 2018 - Now' },
            { title: 'Bachelor of Science in Mathematics', institution: 'University of Texas at Austin', duration: 'Aug 2018 - Aug 2021' },
            { title: 'Advanced Diploma', institution: 'The Texas Academy of Mathematics and Science', duration: 'August 2016 - May 2018' }
        ]
    }
];

const skillBarBlock = {
    className: 'skills-prog',
    skillBars: [
	{ percent: 60, name: 'C/C++' },
        { percent: 80, name: 'Java/Kotlin' },
        { percent: 50, name: 'React/React-Redux' },
        { percent: 80, name: 'TensorFlow' }
    ],
    faIcon: 'code',
    name: 'Programming Skills'
};

const skillPieBlock = {
    className: 'skills-soft',
    skillPies: [
        { percent: 50, name: 'Qt' },
        { percent: 70, name: 'Vim' },
        { percent: 75, name: 'BASH/*nix' }
    ],
    faIcon: 'keyboard-o',
    name: 'Software Skills'
};

const interestBlock = {
    className: 'interests',
    interestItems: [
        { name: 'Art', faIcon: 'fas fa-palette' },
        { name: 'Books', faIcon: 'book' },
        { name: 'Movies', faIcon: 'film' },
        { name: 'Music', faIcon: 'headphones' },
        { name: 'Games', faIcon: 'gamepad' }
    ],
    name: 'Interests',
    faIcon: 'star'
};


const expBlocksElem = expBlocks.map((expBlock) =>
    <Block className={expBlock.className} name={expBlock.name} faIcon={expBlock.faIcon} key={nanoid()} >
        <ExpList experience={expBlock.experience} />
    </Block>
);

const skillBarBlockElem = (
    <Block className={skillBarBlock.className} name={skillBarBlock.name} faIcon={skillBarBlock.faIcon} >
        <ul>
            {
                skillBarBlock.skillBars.map((skillBar) =>
                    <SkillBar percent={skillBar.percent} name={skillBar.name} key={nanoid()} />
                )
            }
        </ul>
    </Block>
);

const skillPieBlockElem = (
    <Block className={skillPieBlock.className} name={skillPieBlock.name} faIcon={skillPieBlock.faIcon} >
        <ul>
            {
                skillPieBlock.skillPies.map((skillPie) =>
                    <SkillPie percent={skillPie.percent} name={skillPie.name} key={nanoid()} />
                )
            }
        </ul>
    </Block>
);

const interestBlockElem = (
    <Block className={interestBlock.className} name={interestBlock.name} faIcon={interestBlock.faIcon}>
        <div className="interests-items">
            {
                interestBlock.interestItems.map((interest) =>
                    <Interest name={interest.name} faIcon={interest.faIcon} key={nanoid()} />
                )
            }
        </div>
    </Block>
);

const profile = {
    faIcon: 'coffee',
    name: 'Daniel Kim',
    job: 'Backend Software Engineer'
};

const aboutBlock = {
    className: 'about',

    text:  
	'I\'m a rising backend software engineer, specializing in event-driven and parallel programming.' +
	'Current research interests include Homotopy Type Theory and Discrete Differential Geometry.' +
	'Experienced with Python, Java, C/C++, Rust, and technical writing.'
}

const contactBlock = {
    className: 'contact',

    lines: [
        { faIcon: 'phone', text: '(480) 717-0165', href: '' },
        { faIcon: 'envelope', text: 'ddk576@utexas.edu', href: '' },
        { faIcon: 'home', text: '', href: '' }
    ],

};

const followBlock = {

};

const profileElem = (
    <Profile faIcon={profile.faIcon} name={profile.name} job={profile.job} />
);

const aboutBlockElem = {

};

const contactBlockElem = {

};

const followBlockElem = {

};

ReactDOM.render(
    <React.StrictMode>
        <div className="resume">
            <div className="base">
                {profileElem}
                {/*{aboutBlockElem}
                {contactBlockElem}
                {followBlockElem} */}
            </div>
            <div className="func">
                {expBlocksElem}
                {skillBarBlockElem}
                {skillPieBlockElem}
                {interestBlockElem}
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
