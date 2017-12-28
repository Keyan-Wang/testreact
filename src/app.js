import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import Counter from './components/counter';
import FetchData from './components/fetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
