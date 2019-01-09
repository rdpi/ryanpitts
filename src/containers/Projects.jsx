import React from 'react';
import { Container } from 'reactstrap';
import FadeIn from 'react-fade-in';

const Projects = () => (
  <Container className="content text-white">
  <FadeIn>
    <h1 className="text-center my-3"><b>Projects</b></h1>
    <hr className="text-white" />
    <h2>
      <b>Clak</b>
      {' '}
      (
      <a href="http://clak.fun" alt="http://clak.fun" target="_blank" rel="noopener noreferrer">http://clak.fun</a>
      )
    </h2>
    <img src="images/clak.png" alt="Clak" className="img-fluid w-75 my-2" />
    <p>
      <a href="http://clak.fun" target="_blank" rel="noopener noreferrer">
        Clak
      </a>
      {' '}
      is an imageboard webapp made using the MERN stack. Technologies used:
      React,
      Redux,
      MongoDB,
      Node.JS,
      Express
    </p>
    <p>
  Source: {' '}
      <a href="https://github.com/rdpi/clak-client" target="_blank" rel="noopener noreferrer">Front End</a>
    {' | '}
      <a href="https://github.com/rdpi/clak-api" target="_blank" rel="noopener noreferrer">Back End</a>
    </p>

    More to come!
    </FadeIn>
  </Container>

);

export default Projects;
