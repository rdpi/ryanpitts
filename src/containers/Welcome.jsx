import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Welcome = () => (
  <Jumbotron className="background rounded-0 text-center d-flex flex-column align-items-center">
    <h1 className="display-1 text-white">Hello, I am</h1>
    <h2 className="display-4 text-black">Ryan Pitts</h2>
    <h2 className="display-5 text-white">Full Stack Web Developer from Nova Scotia, Canada</h2>
    <Button id="hireme">HIRE ME  ⮞  </Button>
  </Jumbotron>
);

export default Welcome;
