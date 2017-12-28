import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/weatherForecasts';
import Grid from './grid/grid';

class FetchData extends Component {
  constructor(props) {
    super(props);

    this.columnDefs = [
      {
        headerName: 'Date',
        field: 'dateFormatted'
      },
      {
        headerName: 'Temp. (C)',
        field: 'temperatureC'
      },
      {
        headerName: 'Temp. (F)',
        field: 'temperatureF'
      },
      {
        headerName: 'Summary',
        field: 'summary'
      },
    ];
  }
  componentWillMount() {
    // This method runs when the component is first added to the page
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  render() {
    const gridProps = {
      /* Grid Properties */
      columnDefs: this.columnDefs,
      rowData: this.props.forecasts
    }
    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        <Grid {...gridProps} />
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}

export default connect(
  state => state.weatherForecasts,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
