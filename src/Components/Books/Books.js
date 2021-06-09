import React, { useContext } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { userData } from "../../App";
import "./Books.css";

const Books = (props) => {
  const [loggedInUser] = useContext(userData);
  const { email } = loggedInUser;
  const { name, author, price, imageURL } = props.books;

  const handleBuyBook = () => {
    const orderData = {
      email: email,
      bookName: name,
      price: price,
    };

    if (loggedInUser.email) {
      fetch("https://fluffy-book-store-server.herokuapp.com/getOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
    } else {
      <Redirect
        to={{
          pathname: "/login",
        }}
      />;
    }
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
        <Link to="/checkOut">
          <button onClick={() => handleBuyBook()}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
