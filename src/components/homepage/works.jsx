import React from 'react';
import { faBriefcase, faDownLong, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../common/card';

import './styles/works.css';

const Works = () => (
  <div className="works">
    <Card
      icon={faBriefcase}
      title="Work"
      body={(
        <div className="works-body">
          <div className="work">
            <img
              src="./ablaze-labs.png"
              alt="ablaze-labs"
              className="work-image"
            />
            <div className="work-title">Ablaze Labs</div>
            <div className="work-subtitle">
              QA Engineer
            </div>
            <div className="work-duration">01/2024 - Present</div>
          </div>

          <div className="work">
            <img
              src="./favicon.png"
              alt="self-employed"
              className="work-image"
            />
            <div className="work-title">Self Employed</div>
            <div className="work-subtitle">
              Full Stack Web Developer
            </div>
            <div className="work-duration">12/2022 - Present</div>
          </div>

          <div className="work">
            <img
              src="./hawassa-uni.jpeg"
              alt="hawassa-university"
              className="work-image"
            />
            <div className="work-title">Hawassa University</div>
            <div className="work-subtitle">
              IT Support Technician
            </div>
            <div className="work-duration">09/2021 - 02/2022</div>
          </div>

          <div className="work-button-cont">
            <button type="button" className="work-button">
              <a
                href="https://docs.google.com/document/d/1TFuTLI5paesgSREVPy196Z83eAfcmClWDKgIZb51yvw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span>My CV</span>
                {'  '}
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </button>
            <button type="button" className="work-button">
              <a
                href="https://www.linkedin.com/in/binyamyohannes/"
                target="_blank"
                rel="noreferrer"
              >
                <span>More on LinkedIn</span>
                {'  '}
                <FontAwesomeIcon icon={faDownLong} />
              </a>
            </button>
          </div>
        </div>
      )}
    />
  </div>
);

export default Works;
