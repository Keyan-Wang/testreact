import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/order';
import Grid from '../grid/grid';

import './pendingOrdersGrid.css';

class PendingOrdersGrid extends Component {

  componentDidMount() {
    this.props.getPendingOrders().then(() => {
      console.log('[componentDidMount]getPendingOrders succeeded')
    });

    this.columnDefs = [
      {
        headerName: 'Order No.',
        field: 'orderNo',
        checkboxSelection: true
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
    const pendingOrdersGridProps = {
      rowSelection: 'multiple',
      enableColResize: true,
      pagination: true,
      paginationPageSize: 30
    };
    const gridProps = {
      ...pendingOrdersGridProps,
      columnDefs: this.columnDefs,
      rowData: this.props.orders,
      onRowClicked: this.onSelected
    };
    return (
      <div className="pendingOrdersGrid">
        <Grid className="grid" {...gridProps} />
      </div>
    );
  }
}

export default connect(
  state => state.order,
  actionCreators
)(PendingOrdersGrid);