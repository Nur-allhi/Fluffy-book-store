import React, { useEffect, useState } from "react";
import Books from "../Books/Books";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "https://fluffy-book-store-server.herokuapp.com/books";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="books-wraper">
      {books.map((bData) => (
        <Books key={bData._id} books={bData}></Books>
      ))}
    </div>
  );
};

export default Home;
