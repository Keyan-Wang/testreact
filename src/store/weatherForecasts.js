import WeatherService from '../services/weatherService';

const requestWeatherForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveWeatherForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { forecasts: [], isLoading: false };

export const actionCreators = {
  requestWeatherForecasts: startDateIndex => async (dispatch, getState) => {    
    if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestWeatherForecastsType, startDateIndex });

    const forecasts = await WeatherService.getWeatherForecasts(startDateIndex);

    dispatch({ type: receiveWeatherForecastsType, startDateIndex, forecasts });
  }
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case requestWeatherForecastsType:
      return {
        ...state,
        startDateIndex: action.startDateIndex,
        isLoading: true
      };
    case receiveWeatherForecastsType:
      return {
        ...state,
        startDateIndex: action.startDateIndex,
        forecasts: action.forecasts,
        isLoading: false
      };
    default:
      return state;
  }
};
