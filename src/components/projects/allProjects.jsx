/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Modal } from 'react-bootstrap';
import './styles/allProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import INFO from '../../data/user';

const ProjectCard = ({ project, onProjectSelect }) => (
  <Card className="card">
    <Card.Img src={project.img} className="card-img-top" alt={project.name} />
    <Card.Body>
      <Card.Title>{project.name}</Card.Title>
      <div className="card-text">
        {project.stacks.map((stack) => (
          <div key={stack} className="tag">{stack}</div>
        ))}
      </div>
      <div className="project_btn_cont">
        <Button variant="primary" onClick={onProjectSelect}>See project</Button>
      </div>
    </Card.Body>
  </Card>
);

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const onProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="all-projects-container">
      <div className="row row-cols-1 row-cols-md-3 g-4 cards_cont">
        {INFO.projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onProjectSelect={() => onProjectSelect(project)}
          />
        ))}
      </div>

      <Modal show={selectedProject} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject && selectedProject.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img src={selectedProject && selectedProject.img} className="card-img-top" alt="..." />
          <div className="card-text">
            {selectedProject && selectedProject.stacks.map((stack) => (
              <div key={stack} className="tag">{stack}</div>
            ))}
          </div>
          <p className="card-text">{selectedProject && selectedProject.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={selectedProject && selectedProject.live} target="_blank" rel="noopener noreferrer">
            See live
            <FontAwesomeIcon icon={faLink} />
          </Button>

          <Button variant="secondary" href={selectedProject && selectedProject.source} target="_blank" rel="noopener noreferrer">
            See source
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onProjectSelect: PropTypes.func.isRequired,
};

export default AllProjects;
