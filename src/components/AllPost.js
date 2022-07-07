import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Editing from "./Editing";

function Allpost() {
  const postList = useSelector((state) => state.postList);

  return (
    <div>
      {postList.length === 0 ? (
        <>No Post</>
      ) : (
        postList.map((item) => (
          <div key={item.id}>
            {item.editing ? <Editing post={item} /> : <Post post={item} />}
          </div>
        ))
      )}
    </div>
  );
}

export default Allpost;
