import React, { useEffect } from "react";
import { useParams } from "react-router";

const Orders = () => {
  const { id } = useParams();

  // useEffect(() => {
  //   const url = "http://localhost:5000/orders";
  //   fetch(url).then(res)
  // }, []);

  return (
    <div>
      <h2>Check Out</h2>
      <h2>Product id: {id}</h2>
      {/* <table></table> */}
    </div>
  );
};

export default Orders;
