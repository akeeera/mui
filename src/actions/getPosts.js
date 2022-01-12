import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
  return posts;
});
