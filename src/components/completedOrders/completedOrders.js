import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompletedOrdersGrid from './completedOrdersGrid';
import { actionCreators as orderActionCreators } from '../../store/order';

import './completedOrders.css';

class CompletedOrders extends Component {

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
};

export default connect(
  state => ({ ...state.order }),
  { ...orderActionCreators }
)(CompletedOrders);
