import React from "react";
import "./Books.css";
const Books = (props) => {
  const { name, author, price, imageURL } = props.books;
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
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Books;
