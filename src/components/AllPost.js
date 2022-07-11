import React from "react";
import Post from "./Post";
import Editing from "./Editing";
// redux
import { useSelector } from "react-redux";

import './Allpost.css'

function Allpost() {
  const postList = useSelector((state) => state.postList);

  return (
    <div>
      {postList.length === 0 ? (
        <div className="no-post">No Post</div>
      ) : (
        postList.map((item) => (
          <div key={item.id}  className="all">
            {item.editing ? <Editing post={item} /> : <Post post={item} />}
          </div>
        ))
      )}
    </div>
  );
}

export default Allpost;
