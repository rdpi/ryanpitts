import React from 'react';
import { Nav } from 'reactstrap';
import Sidebar from './Sidebar';

const Header = () => (
  <Nav className="header">
    <Sidebar pageWrapId="page-wrap" outerContainerId="App" />
  </Nav>
);

export default Header;
