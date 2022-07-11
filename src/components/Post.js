import React from "react";

//css
import "./Css/post.css";

// redux
import { deletcAction, editAction } from "../redux/actions/PostAction";
import { useDispatch } from "react-redux";

function Post(props) {
  const item = props.post;
  const dispatch = useDispatch();
  return (
    <div className="post-con">
      <button className="btn-dark btn-del" onClick={() => dispatch(deletcAction(item.id))}>X</button>
      <h1 className="message">{item.title}</h1>
      <p className="message">{item.message}</p>
      <div className="btn-edit-delete">
        <button className="btn-light" onClick={() => dispatch(editAction(item.id))}>EDIT</button>
      </div>
    </div>
  );
}

export default Post;
