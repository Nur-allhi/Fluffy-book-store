import React from "react";
import "./Admin.css";
import AddBook from "./AddBook/AddBook";
import ManageBooks from "./MangeBooks/ManageBooks";

const Admin = () => {
  return (
    <div className="admin-wrapper">
      <div className="addbook">
        <AddBook />
      </div>
      <div className="managebook-wrapper">
        <ManageBooks />
      </div>
    </div>
  );
};

export default Admin;
