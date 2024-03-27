/* eslint-disable react/no-danger */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

import Logo from '../components/common/logo';
import Footer from '../components/common/footer';
import NavBar from '../components/common/navBar';
import Article from '../components/homepage/article';
import Works from '../components/homepage/works';

import INFO from '../data/user';
import SEO from '../data/seo';
import myArticles from '../data/articles';

import './styles/homepage.css';

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset, 2);

      const newLogoSize = 80 - (scroll * 3.3) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === 'home');

  const logoStyle = {
    display: 'flex',
    position: stayLogo ? 'fixed' : 'relative',
    top: stayLogo ? '2.85vh' : 'auto',
    zIndex: 999,
    border: stayLogo ? '1px solid white' : 'none',
    borderRadius: stayLogo ? '50%' : 'none',
    boxShadow: stayLogo ? '0px 4px 10px rgba(0, 0, 0, 0.25)' : 'none',
    marginTop: stayLogo ? '0' : '1.5em',
  };

  const homeStyle = {
    marginTop: stayLogo ? '3.75em' : '0',
  };

  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(', ')}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container" style={homeStyle}>
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-name">
                  {INFO.homepage.name}
                </div>

                <div className="homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description1}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description2}
                </div>

                <div className="subtitle homepage-subtitle">
                  <div dangerouslySetInnerHTML={{ __html: INFO.homepage.description3 }} />
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a
                href={INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
            </div>

            <div className="homepage-after-title">
              <div className="homepage-articles">
                <div className="title title-2">Recent Articles</div>
                {myArticles.map((article, index) => (
                  <div
                    className="homepage-article"
                    key={(index + 1).toString()}
                  >
                    <Article
                      key={(index + 1).toString()}
                      date={article().date}
                      title={article().title}
                      description={article().description}
                      link={article().link}
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                ))}
              </div>

              <div className="homepage-works">
                <Works />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
