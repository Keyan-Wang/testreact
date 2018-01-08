import React, { Component } from 'react';
import PendingOrdersGrid from './pendingOrdersGrid';

import './pendingOrders.css';

export default class PendingOrders extends Component {
  orderSelected = (order) => {
    console.log('selected');
  }

  render() {
    return (
      <div className="pendingOrders" >
        <h1>Pending Orders</h1>
        <PendingOrdersGrid onSelected={this.orderSelected} />
      </div>
    );
  }
}