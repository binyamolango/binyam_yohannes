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
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset, 2);

      const newLogoSize = 80 - (scroll * 3.4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
        }
      } else {
        setLogoSize(newLogoSize);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === 'home');

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
            <div>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-name">
                  {INFO.homepage.name}
                </div>

                <div className="homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
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
