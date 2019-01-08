import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const Projects = () => (
  <Jumbotron className="content text-white">
    <h1>Projects</h1>
    <h2>Clak</h2>
    <Link to="http://clak.fun">http://clak.fun</Link>
    <p>
  Clak is an imageboard webapp made using the MERN stack
  Technologies used:
  React
  Redux
  MongoDB
  NodeJS
  Express
    </p>
    <p>
  Source:
  Front End:
      <Link to="https://github.com/rdpi/clak-client" />
  Back End:
      <Link to="https://github.com/rdpi/clak-api" />
    </p>

    more to come :)
  </Jumbotron>

);

export default Projects;