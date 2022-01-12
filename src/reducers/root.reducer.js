import { combineReducers } from "@reduxjs/toolkit";
import { slicePosts } from "./posts.reducer";

export const reducer = combineReducers({
  posts: slicePosts.reducer,
});
