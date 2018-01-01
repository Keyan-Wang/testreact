import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import FetchData from './components/fetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={FetchData} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
