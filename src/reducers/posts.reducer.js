import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../actions/getPosts";
import { preloadedState } from "../store/preloadedState";

export const slicePosts = createSlice({
  name: "posts",
  initialState: preloadedState.posts,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
