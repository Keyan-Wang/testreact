import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>React App Sample</h1>
    <p>Welcome, this is home page</p>
  </div>
);

export default connect()(Home);
