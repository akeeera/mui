import * as React from "react";
import Post from "../components/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/getPosts";

function Posts() {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      {posts.data.map((item) => (
        <Post key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default Posts;
