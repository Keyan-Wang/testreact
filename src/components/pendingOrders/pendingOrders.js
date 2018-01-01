import React, { Component } from 'react';
import { connect } from 'react-redux';
import PendingOrdersGrid from './pendingOrdersGrid';
import { actionCreators as orderActionCreators } from '../../store/order';

import './pendingOrders.css';

class PendingOrders extends Component {
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
};

export default connect(
  state => ({ ...state.order }),
  { ...orderActionCreators }
)(PendingOrders);
