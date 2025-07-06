import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:3000/api/getOrders");
      const data = await response.json();
      setAllOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders m-5 p-5">
      {allOrders.length > 0 ? (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <ul>
            {allOrders.map((order, idx) => (
              <li key={order.id || idx}>
                {/* Customize this as per your order object structure */}
                <strong>Name:</strong> {order.name} <br />
                <strong>Price:</strong> {order.price} <br />
                <strong>Quantity:</strong> {order.qty} <br /> <br/>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/dashboard"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;