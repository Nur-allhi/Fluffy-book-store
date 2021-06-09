import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageBooks..css";

const ManageBooks = (props) => {
  const [manegeBooks, setManageBooks] = useState([]);

  useEffect(() => {
    const url = "https://fluffy-book-store-server.herokuapp.com/books";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageBooks(data));
  }, []);

  // Delete Data:
  const handleDelete = (id) => {
    fetch(`https://fluffy-book-store-server.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h2>{manegeBooks.length} Books in our Store</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {manegeBooks.map((od) => (
            <tr key={od._id}>
              <td>{od.name}</td>
              <td>{od.author}</td>
              <td>${od.price}</td>
              <button
                className="delete-book"
                onClick={() => handleDelete(`${od._id}`)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBooks;
