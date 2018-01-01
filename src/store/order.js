import OrderService from '../services/orderService';

const receiveOrdersType = 'RECEIVE_ORDERS';

const initialState = { orders: [] };

export const actionCreators = {
  getCompletedOrders: () => async (dispatch, getState) => {
    const orders = await OrderService.getCompletedOrders();
    console.log('[actionCreators]getCompletedOrders succeeded');
    dispatch({ type: receiveOrdersType, orders });
  },
  getPendingOrders: () => async (dispatch, getState) => {
    const orders = await OrderService.getPendingOrders();
    console.log('[actionCreators]getPendingOrders succeeded');
    dispatch({ type: receiveOrdersType, orders });
  }
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case receiveOrdersType:
      return {
        ...state,
        orders: action.orders
      };
    default:
      return state;
  }
};
