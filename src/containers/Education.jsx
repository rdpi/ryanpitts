import React from 'react';
import { Container } from 'reactstrap';
import FadeIn from 'react-fade-in';

const Education = () => (
  <Container className="text-center text-white content my-3">
  <FadeIn>
    <h1><b>Education</b></h1>
    <hr />
    <img className="img-fluid" src="images/dal.png" alt="Dalhousie University" />
    <h2 className="font-weight-bold">Bachelor of Computer Science</h2>
    <h3>2013-2018</h3>
    <h2 className="font-weight-bold">Certificate in Communications Technologies and Cyber Security</h2>
    <h3>2018</h3>
    </FadeIn>
  </Container>
);

export default Education;
