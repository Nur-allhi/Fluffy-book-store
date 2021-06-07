import React from "react";

const CheckOut = (props) => {
  const { email, bookName, price } = props.orders;

  //   const priceArray = Object.values(price);
  //     console.log(priceArray);

  //   const sum = price.reduce((accumulator, currentvalue) => {
  //     return accumulator + currentvalue;
  //   }, 0);

  return (
    <div>
      <p>
        <strong>Email: </strong> {email} <strong>Book name</strong> {bookName}
        <strong>Price: </strong> {price}
      </p>
    </div>
  );
};

export default CheckOut;
