import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import CompletedOrders from './components/completedOrders/completedOrders';
import PendingOrders from './components/pendingOrders/pendingOrders';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/completedOrders' component={CompletedOrders} />
    <Route path='/pendingOrders' component={PendingOrders} />
  </Layout>
);
