import React from "react";

import { useState } from "react";

//redux
import { updateAction } from "../redux/actions/PostAction";
import { useDispatch } from "react-redux";

function Editing(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.post.title);
  const [message, setMessage] = useState(props.post.message);


  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      title,
      message,
    };

    dispatch(updateAction({ ...props.post, ...data }));
    setTitle("");
    setMessage("");
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
          <button className="btn-light">UPDATE</button>
          <button className="btn-light"></button>
        </form>
      }
    </div>
  );
}

export default Editing;
