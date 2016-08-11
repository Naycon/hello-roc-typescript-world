import * as React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navbar = () => (
  <div className="navbar">
    <div className="wrapper">
      <ul>
        <li>
          <IndexLink
            to="/"
            className="a"
            activeClassName="active"
          >
          Home
        </IndexLink>
        </li>
        <li>
          <Link
            to="/about/"
            className="a"
            activeClassName="active"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
