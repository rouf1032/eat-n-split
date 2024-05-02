import React, { useState } from "react";
import "./FormAddFriend.css";
import Button from "../Button";

const FormAddFriend = ({handleAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      name,
      image,
      balance:0,
      id:crypto.randomUUID()


    }

    handleAddFriend(newFriend);
    setName("")
    setImage("")
  }


  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input type="text" value={name} onChange={handleName} />

      <label>🌄 Image URL</label>
      <input type="text" value={image} onChange={handleImage} />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
