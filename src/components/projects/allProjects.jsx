/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Button, Modal, Container, Row, Col,
} from 'react-bootstrap';
import './styles/allProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import INFO from '../../data/user';

const ProjectCard = ({ project, onProjectSelect }) => (
  <Col xs={12} md={6} xl={4} className="cards_cont">
    <Card className="bg-light text-white">
      <Card.Img src={project.img} className="card-img-top" alt={project.name} />
      <div className="card-overlay">
        <Card.ImgOverlay>
          <Card.Title>{project.name}</Card.Title>
          <div className="card-text">
            {project.stacks.map((stack) => (
              <div key={stack} className="tag tag2">{stack}</div>
            ))}
          </div>
          <div className="project_btn_cont">
            <Button variant="success" className="project_btn" onClick={onProjectSelect}>See project</Button>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  </Col>

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
    <Container>
      <Row>
        {INFO.projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onProjectSelect={() => onProjectSelect(project)}
          />
        ))}
      </Row>

      <Modal id="popup" show={selectedProject} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject && selectedProject.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img src={selectedProject && selectedProject.img} className="card-img-top" alt="..." />
          <div className="card-text card-text2">
            {selectedProject && selectedProject.stacks.map((stack) => (
              <div key={stack} className="tag tag2">{stack}</div>
            ))}
          </div>
          <p className="card-text">{selectedProject && selectedProject.desc}</p>
        </Modal.Body>
        <Modal.Footer className="project_btn_cont btn_row">
          <Button variant="success" className="project_btn" href={selectedProject && selectedProject.live} target="_blank" rel="noopener noreferrer">
            See live
            <FontAwesomeIcon icon={faLink} />
          </Button>

          <Button variant="success" className="project_btn" href={selectedProject && selectedProject.source} target="_blank" rel="noopener noreferrer">
            See source
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onProjectSelect: PropTypes.func.isRequired,
};

export default AllProjects;
