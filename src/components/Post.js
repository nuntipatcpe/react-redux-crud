import React from "react";
import { useDispatch } from "react-redux";
import { deletcAction, editAction } from "../actions/PostAction";

function Post(props) {
  const item = props.post;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.message}</p>
      <button onClick={() => dispatch(editAction(item.id))}>EDIT</button>
      <button onClick={() => dispatch(deletcAction(item.id))}>DELETC</button>
    </div>
  );
}

export default Post;
