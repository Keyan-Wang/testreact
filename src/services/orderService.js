// import Config from '../app.config';
// import HttpClient from './httpClient';

export default class OrderService {

  static getCompletedOrders() {
    return this.getOrders('completed');
  }

  static getPendingOrders() {
    return this.getOrders('pending');
  }

  static getOrders(status) {
    // return HttpClient.get(`${Config.apiUrl}/orders`);

    // Mock api call
    return new Promise((resolve) => {
      resolve([...Array(200).keys()].map(idx => {
        var r = {
          'orderNo': 'ON10000' + idx,
          'orderDate': '2017-12-2' + idx + 'T11:07:26.0422336Z',
          'customer': 'test@test.com',
          'status': status
        };
        return r;
      }));
    });
  }
}