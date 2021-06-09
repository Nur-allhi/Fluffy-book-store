import React, { useContext, useEffect, useState } from "react";
import { userData } from "../../App";
import CheckOut from "./CheckOut";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(userData);

  useEffect(() => {
    const url =
      "https://fluffy-book-store-server.herokuapp.com/previousOrders?email=" +
      loggedInUser.email;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("idToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <h2>{orders.length} order you have in a row</h2>
      {orders.map((orders) => (
        <CheckOut key={orders._id} orders={orders}></CheckOut>
      ))}
    </div>
  );
};

export default Orders;
