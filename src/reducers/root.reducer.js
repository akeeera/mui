import { combineReducers } from "@reduxjs/toolkit";
import { slicePosts } from "./posts.reducer";
import { sliceUsers } from "./users.reducer";

export const reducer = combineReducers({
  posts: slicePosts.reducer,
  users: sliceUsers.reducer,
});
