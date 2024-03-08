import React from "react";
import "./MyOrder.css"
const MyOrder = () => {
  return (
    <div className="order-data">
      <h3>My Order</h3>
      <div className="orders-container">
        <div className="orders-titles">
          <table>
            <thead>
              <tr className="table-headers">
                <th>PId</th>
                <th>Product Name</th>
                <th>Order Time</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10625</td>
                <td>Mark Luther</td>
                <td>Jan 11, 2024 12:58 PM</td>

                <td>Card</td>

                <td>€1,536</td>

                <td>Delivered</td>
              </tr>
              <tr>
                <td>10625</td>
                <td>Mark Luther</td>
                <td>Jan 11, 2024 12:58 PM</td>

                <td>Card</td>

                <td>€1,536</td>

                <td>Delivered</td>
               
              </tr>
              <tr>
                <td>10625</td>
                <td>Mark Luther</td>
                <td>Jan 11, 2024 12:58 PM</td>

                <td>Card</td>

                <td>€1,536</td>

                <td>Delivered</td>
              </tr>
              <tr>
                <td>10625</td>
                <td>Mark Luther</td>
                <td>Jan 11, 2024 12:58 PM</td>

                <td>Card</td>

                <td>€1,536</td>

                <td>Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
