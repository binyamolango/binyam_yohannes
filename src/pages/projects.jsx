/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import AllProjects from '../components/projects/allProjects';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'projects');

  return (
    <>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(', ')}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              My Recent Works
            </div>

            <div className="projects-list">
              <div className="row row-cols-1 row-cols-md-3 g-4 cards_cont" id="portfolio_card" />
              <div id="popup" className="hidden" />
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
