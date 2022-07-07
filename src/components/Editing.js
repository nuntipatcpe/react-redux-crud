import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateAction } from "../actions/PostAction";

function Editing(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.post.title);
  const [message, setMessage] = useState(props.post.message);
  const [edit, setEdit] = useState(true);

  const handleEdit = (e) => {
    // e.preventDefault();
    const data = {
      title,
      message,
    };
    dispatch(updateAction({ ...props.post, ...data }));
    setTitle("");
    setMessage("");
    setEdit(!edit);
  };

  return (
    <div>
      {
        <form action="" onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <textarea
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter post "
            required
          ></textarea>
          <br />
          <br />
          <button>UPDATE</button>
        </form>
      }
    </div>
  );
}

export default Editing;
