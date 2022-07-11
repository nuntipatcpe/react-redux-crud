import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Allpost from "./AllPost";
import "./Css/Postform.css";

// redux
import { postAction } from "../redux/actions/PostAction";
import { useDispatch } from "react-redux";

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
      <div className="container">

        <div className="post-container">
          
          <h1 className="topic">Create post</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-post">
              <input
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                cols="25"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter post"
                required
              ></textarea>
            </div>
            <div className="btn-con">
              <button className="btn-light">Post</button>
            </div>
          </form>
        </div>
        <div className="allpost">
          <Allpost />
        </div>
        
      </div>
    
    </div>
  );
}

export default Postform;
