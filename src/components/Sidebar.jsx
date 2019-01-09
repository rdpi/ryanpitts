import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Menu isOpen={false}>
    <Link className="menu-item" to="/">
      <i className="fas fa-user mr-3" />
        About
    </Link>

    <Link className="menu-item" to="projects">
      <i className="fas fa-file-code mr-3" />
        Projects
    </Link>

    <Link className="menu-item" to="skills">
      <i className="fas fa-laptop-code mr-3" />
        Skills
    </Link>

    <Link className="menu-item" to="education">
      <i className="fas fa-university mr-3" />
        Education
    </Link>

    <Link className="menu-item" to="contact">
      <i className="fas fa-envelope mr-3" />
        Contact
    </Link>

  </Menu>
);
export default Sidebar;
