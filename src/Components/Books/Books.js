import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userData } from "../../App";
import "./Books.css";
// import userData from "../../App";

const Books = (props) => {
  const [loggedInUser] = useContext(userData);
  const { email } = loggedInUser;
  const { _id, name, author, price, imageURL } = props.books;
  const handleBuyBook = () => {
    const orderData = {
      email: email,
      bookName: name,
      price: price,
    };

    fetch("http://localhost:5000/getOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  };

  return (
    <div className="all-books">
      <div className="book-image">
        <img src={imageURL} alt="" />
      </div>
      <div className="name-author">
        <h3>{name}</h3>
        <h6>{author}</h6>
      </div>
      <div className="buy-book">
        <p>Price: ${price}</p>
        <Link to={/orders/}>
          <button onClick={() => handleBuyBook()}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
