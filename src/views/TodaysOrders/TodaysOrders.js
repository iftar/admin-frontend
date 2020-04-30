import React from 'react';
import OrderService from '../../services/OrderService';

class TodaysOrders extends React.Component {
  constructor() {
    super();
    this.orderService = new OrderService();
  }

  getTodaysOrders() {
    return this.orderService.getTodaysOrders();
  }

  render() {
    return (<div className="TodaysOrders">
      <h1>Today's orders</h1>
    </div>);
  }
}

export default TodaysOrders;
