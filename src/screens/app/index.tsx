// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import { Component, PropTypes } from 'react';
import * as Helmet from 'react-helmet';

import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';

interface AppProps {
  children: Array<any>;
}

export default class App extends Component<AppProps, void> {
  render() {
    return (
      <div className="main">
        <Helmet
          link={[{
            rel: 'icon', href: '/favicon.png',
          }]}
        />
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
