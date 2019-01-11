import React from 'react';
import { Nav } from 'reactstrap';

const Footer = () => (
  <Nav className="fixed-bottom footer d-flex justify-content-center">
    <a href="https://github.com/rdpi" target="_blank" rel="noopener noreferrer" className="d-flex flex-column text-center footercontent mx-4">
      <i className="fab fa-github" />
      <span>GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/ryan-pitts-a9390b8a/" target="_blank" rel="noopener noreferrer" className="d-flex flex-column text-center footercontent mx-4">
      <i className="fab fa-linkedin" />
      <span>Linkedin</span>
    </a>
  </Nav>
);

export default Footer;
