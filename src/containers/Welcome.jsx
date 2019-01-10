import React from 'react';
import { Button } from 'reactstrap';
import FadeIn from 'react-fade-in';

const Welcome = () => (
  <div className="background rounded-0 text-center d-flex align-items-center justify-content-center">
    <FadeIn>
      <h1 className="display-3 text-white font-weight-bold mb-4">Hello, I am</h1>
      <h2 className="display-4 font-weight-bold my-4 name">Ryan Pitts</h2>
      <h3 className="display-5 text-white font-weight-bold my-4">Full Stack Web Developer from Nova Scotia, Canada</h3>
      <Button id="hireme" className="mt-2 font-weight-bold">HIRE ME  ⮞  </Button>
    </FadeIn>
  </div>
);

export default Welcome;
