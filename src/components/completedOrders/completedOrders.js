import React, { Component } from 'react';
import CompletedOrdersGrid from './completedOrdersGrid';

export default class CompletedOrders extends Component {

  orderSelected = (order) => {
    console.log('selected');
  }

  render() {
    return (
      <div className="completedOrders" >
        <h1>Completed Orders</h1>
        <CompletedOrdersGrid onSelected={this.orderSelected} />
      </div>
    );
  }
}
