import * as React from "react";
import Post from "../components/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/getPosts";
import Grid from "@mui/material/Grid";

function Posts() {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      <Grid container>
        {posts.data.map((item) => (
          <Grid item xs={4}>
            <Post key={item.id} title={item.title} props={item.body} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
