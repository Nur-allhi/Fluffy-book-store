import React from "react";
import "./ManageBooks..css";

const ManageBooks = (props) => {
  const { _id, name, author, price } = props.books;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <p>
        <strong>Book-Name: </strong>
        {name} <strong>Author: </strong>
        {author} <strong>Price: </strong>
        {price} <button onClick={() => handleDelete(`${_id}`)}>Delete</button>
      </p>
    </div>
  );
};

export default ManageBooks;
