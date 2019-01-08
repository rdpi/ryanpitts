import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => (
  // Pass on our props
  <Menu {...props}>
    <Link className="menu-item" to="about">
        About Me
    </Link>

    <Link className="menu-item" to="projects">
        Projects
    </Link>

    <Link className="menu-item" to="skills">
        Skills
    </Link>

    <Link className="menu-item" to="education">
        Education
    </Link>

    <Link className="menu-item" to="contact">
        Contact
    </Link>
  </Menu>
);
