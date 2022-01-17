import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  console.log(posts);
  return posts;
});
