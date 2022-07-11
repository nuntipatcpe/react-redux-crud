import React from "react";

import { useState } from "react";

//redux
import { updateAction ,cancleAction} from "../redux/actions/PostAction";
import { useDispatch } from "react-redux";

//css
import './Css/Edit.css'

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
    <div className="con-edit">
       <button className="btn-light cancel" onClick={()=>dispatch(cancleAction())}>X</button>
        <form action="" onSubmit={handleEdit}>
          <div className="input-post">
            <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter post "
            required
          ></textarea>
          </div>
        <button className="btn-light" >Update</button>
        </form>
      
     
    </div>
  );
}

export default Editing;
