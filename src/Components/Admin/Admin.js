import React, { useEffect, useState } from "react";
import "./Admin.css";
import AddBook from "./AddBook/AddBook";
import ManageBooks from "./MangeBooks/ManageBooks";

const Admin = () => {
  const [manegeBooks, setManageBooks] = useState([]);

  useEffect(() => {
    const url = "https://fluffy-book-store-server.herokuapp.com/books";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageBooks(data));
  }, []);
  return (
    <div className="admin-wrapper">
      <div>
        <AddBook />
      </div>
      <div className="managebook-wrapper">
        {manegeBooks.map((books) => (
          <ManageBooks key={books._id} books={books}></ManageBooks>
        ))}
      </div>
    </div>
  );
};

export default Admin;
