import React from "react";
import "./Admin.css";
import AddBook from "./AddBook/AddBook";
import ManageBooks from "./MangeBooks/ManageBooks";

const Admin = () => {
  return (
    <div className="admin-wrapper">
      <AddBook />
      <ManageBooks />
    </div>
  );
};

export default Admin;
