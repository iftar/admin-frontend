import React from 'react';
import OrderService from '../../services/OrderService';

class TodaysOrders extends React.Component {
  constructor() {
    super();
    this.orderService = new OrderService();
    this.state = {
      orders: []
    };
    this.getTodaysOrders();
  }

  getTodaysOrders() {
    return this.orderService.getTodaysOrders().then( result => {
      this.setState(() => ({
        orders: result.data.data.orders
      }));
    });
  }

  getOrderRows() {
    return this.state.orders.map( order => {
      return (
        <tr key={`Order-${order.id}`}>
          <th scope="row">{order.id}</th>
          <td>{order.first_name}</td>
          <td>{order.last_name}</td>
          <td>{order.phone_number}</td>
          <td>{order.quantity}</td>
          <td>{order.collection_point.name}</td>
          <td>{order.collection_point_time_slot.start_time}</td>
          <td>{order.status}</td>
          <td>{order.notes}</td>
        </tr>
      );
    });
  }

  render() {
    let ordersRows = this.getOrderRows();

    return (<div className="TodaysOrders">
      <h1>Today's orders</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone number</th>
              <th scope="col">Quantity</th>
              <th scope="col">Collection point</th>
              <th scope="col">Pick up time</th>
              <th scope="col">Status</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {ordersRows}
          </tbody>
        </table>
      </div>
    </div>);
  }
}

export default TodaysOrders;
