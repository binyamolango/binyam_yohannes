/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import Socials from '../components/about/socials';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-Access-Key': '$2a$10$0/4aQ58zY3xViaZ8RQOT6e6SYP2FJmqBxMXPZzXeBVAq6hl.14.wC',
      };
      const response = await fetch('https://api.jsonbin.io/v3/b', {
        headers,
        method: 'POST',
        body: JSON.stringify({
          name, email, message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        setLoading(false);
        setEmail('');
        setName('');
        setMessage('');
        setAlert('Message sent successfully!');
      }

      return await response.json();
    } catch (error) {
      setError(error.message);
      return { error: error.message };
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(', ')}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} link />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let&apos;s Get in Touch
            </div>

            <div className="contact_row">
              <h1>
                I&apos;m always interested in hearing about new projects,
                so if you&apos;d like to chat please get in touch.
              </h1>

              <Form onSubmit={handleSubmit} className="form">
                <div className="alert__msg">{alert}</div>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full name"
                    maxLength="30"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="textarea" className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Hey I'd like to connect to..."
                    maxLength="500"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
                </Form.Group>
                <div className="project_btn_cont">
                  {loading ? <Button variant="secondary" type="submit" className="project_btn" disabled>Get in touch</Button>
                    : <Button variant="secondary" type="submit" className="project_btn">Get in touch</Button>}
                  {error && <div>{error}</div>}
                </div>
              </Form>
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
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

export default Contact;
