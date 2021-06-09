import React, { useState } from "react";
import "./AddBook.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBook = () => {
  const [imageURL, setImageURL] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newBookData = {
      name: data.name,
      author: data.author,
      price: Number(data.price),
      imageURL: imageURL,
    };
    const url = `https://fluffy-book-store-server.herokuapp.com/addBook`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBookData),
    }).then((res) => console.log("Pushed to server", res));
  };

  // Image upload :
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "cea9da290a58ca8c40076a3b0c37947d");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="addbook-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Book Name"
        type="text"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <br />
      <input placeholder="Book Author" type="text" {...register("author")} />
      <br />
      <input
        placeholder="Book Price"
        type="text"
        {...register("price", { required: true })}
      />
      {errors.price && <span>This field is required</span>}
      <br />
      <input type="file" onChange={handleImageUpload} />

      <br />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
