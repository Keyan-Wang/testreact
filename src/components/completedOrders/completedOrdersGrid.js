import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/order';
import Grid from '../grid/grid';

import './completedOrdersGrid.css';

class CompletedOrdersGrid extends Component {

  componentDidMount() {
    this.props.getCompletedOrders().then(() => {
      console.log('[componentDidMount]getCompletedOrders succeeded')
    });

    this.columnDefs = [
      {
        headerName: 'Order No.',
        field: 'orderNo'
      },
      {
        headerName: 'Order Date',
        field: 'orderDate'
      },
      {
        headerName: 'Customer',
        field: 'customer'
      },
      {
        headerName: 'Status',
        field: 'status'
      }
    ];
  }

  componentWillUnmount() {
  }

  onSelected = (order) => {
    if (this.props.onSelected) this.props.onSelected(order);
  }

  render() {
    const gridProps = {
      columnDefs: this.columnDefs,
      rowData: this.props.orders,
      onRowClicked: this.onSelected
    }
    console.log(gridProps);
    return (
      <div className="completedOrdersGrid">
        <Grid className="grid" {...gridProps} />
      </div>
    );
  }
}

export default connect(
  state => state.order,
  actionCreators
)(CompletedOrdersGrid);