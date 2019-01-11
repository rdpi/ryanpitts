import React from 'react';
import { Container } from 'reactstrap';
import FadeIn from 'react-fade-in';

const Contact = () => (
  <Container className="text-white">
    <FadeIn>
    <h1 className="text-white font-weight-bold text-center my-3">Contact</h1>
    <hr />
    <h4><b>Email:</b> ryanpitts@protonmail.com</h4>
    </FadeIn>
  </Container>
);

export default Contact;
