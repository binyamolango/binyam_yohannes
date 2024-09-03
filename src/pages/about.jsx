/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Socials from '../components/about/socials';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/about.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'about');

  return (
    <>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(', ')}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
                  {INFO.about.title}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description1}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description2}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description3}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description4}
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src="profile_pic.png"
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>

          <section className="skills">
            <Container>
              <Row className="row-cols-1 row-cols-md-3 g-4 cards_cont">
                <Col>
                  <Card>
                    <Card.Body className="skills-card-body">
                      <Card.Img src="./icon-languages.svg" alt="icon-languages" />
                      <Card.Title>Languages</Card.Title>
                      <div className="card-text">
                        <div className="tag">JavaScript</div>
                        <div className="tag">Ruby</div>
                        <div className="tag">HTML</div>
                        <div className="tag">CSS</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card>
                    <Card.Body className="skills-card-body">
                      <Card.Img src="./icon-frameworks.svg" alt="icon-frameworks" />
                      <Card.Title>Frameworks</Card.Title>
                      <div className="card-text">
                        <div className="tag">React.js</div>
                        <div className="tag">Bootstrap</div>
                        <div className="tag">Ruby on Rails</div>
                        <div className="tag">RSpec</div>
                        <div className="tag">Capybara</div>
                        <div className="tag">Selenium</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card>
                    <Card.Body className="skills-card-body">
                      <Card.Img src="./icon-skills.svg" alt="icon-skills" />
                      <Card.Title>Skills</Card.Title>
                      <div className="card-text">
                        <div className="tag">Database Management</div>
                        <div className="tag">Version Control</div>
                        <div className="tag">CLI</div>
                        <div className="tag">Web Development</div>
                        <div className="tag">API Design</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
