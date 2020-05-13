import React from 'react';
import OrderService from '../../services/OrderService';

class TodaysOrders extends React.Component {
  constructor() {
    super();
    this.orderService = new OrderService();
    this.state = {
      orders: [],
      last_updated: null,
      status: "Loading...",
    };
    this.getTodaysOrders();
  }

  getTodaysOrders() {
    return this.orderService.getTodaysOrders().then( result => {
      this.setState(() => ({
        orders: result.data.data.orders,
        last_updated: result.data.data.last_updated,
        status: result.data.data.orders.length ? "Loaded" : "No orders yet",
      }));
    });
  }

  getOrderRows() {
    return this.state.orders.map( order => {
      return (
        <tr key={`Order-${order.id}`}>
          <th scope="row">{order.id}</th>
          <td>{order.collection_point.name}</td>
          <td>{order.quantity}</td>
          <td>{order.collection_point_time_slot.start_time}</td>
          <td>{order.first_name}</td>
          <td>{order.last_name}</td>
          <td><a href={`tel:${order.phone}`}>{order.phone}</a></td>
          <td><a href={`mailto:${order.email}`}>{order.email}</a></td>
          <td>{order.collection_point_time_slot.type == "user_pickup" ? "Collection" : "Delivery"}</td>
          <td>{order.status}</td>
          <td>{order.notes}</td>
        </tr>
      );
    });
  }

  render() {
    let emptyRow = (
      <tr>
        <td colSpan="11">{this.state.status}</td>
      </tr>
    );
    let ordersRows = this.getOrderRows();
    let rows = ordersRows.length ? ordersRows : emptyRow;

    return (<div className="TodaysOrders">
      <h1>Today's orders</h1>
      <p>{this.state.last_updated ? `Last updated at ${this.state.last_updated}` : this.state.status}</p>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Collection point</th>
              <th scope="col">Quantity</th>
              <th scope="col">Pick up time</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>);
  }
}

export default TodaysOrders;
