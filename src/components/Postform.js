import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAction } from "../actions/PostAction";
import { v4 as uuidv4 } from "uuid";

import Allpost from "./AllPost";

function Postform() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      title,
      message,
      quantity: 1,
      editing: false,
    };

    dispatch(postAction(data));
    setTitle("");
    setMessage("");
  };
  return (
    <div>
      <h1>Create post</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter post "
          required
        ></textarea>
        <br />
        <br />
        <button>Post</button>
      </form>
      <Allpost />
    </div>
  );
}

export default Postform;
