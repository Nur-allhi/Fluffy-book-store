import React, { useEffect } from "react";
import "./ManageBooks..css";

const ManageBooks = (props) => {
  const { _id, name, author, price } = props.books;

  const handleDelete = (id) => {
    console.log(id);
    // fetch(`http://localhost:5000//deleteBook/${id}`, { method: "DELETE" }).then(
    //   (res) => console.log(res)
    // );
    // useEffect(() => {
    //   const url = `http://localhost:5000//deleteBook/${id}`;
    //   fetch(url, {
    //     method: "DELETE",
    //   }).then((result) => {
    //     console.log(result);
    //     // if (result) {
    //     //   event.target.perentNode.style.display = "none";
    //     // }
    //   });
    // }, []);
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
