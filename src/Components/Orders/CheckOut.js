import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { userData } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
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
    <div className="check-out">
      <h1>Checkout</h1>
      <h2>You have {orders.length} order to checkOut</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>User Email</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((od) => (
            <tr key={od._id}>
              <td>{od.bookName}</td>
              <td>{od.email}</td>
              <td>${od.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckOut;
