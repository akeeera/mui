import { combineReducers } from "@reduxjs/toolkit";
import { slicePosts } from "./posts.reducer";
import { sliceUsers } from "./users.reducer";
import { sliceAlbums } from "./albums.reducer";
import { slicePhotos } from "./photos.reducer";

export const reducer = combineReducers({
  posts: slicePosts.reducer,
  users: sliceUsers.reducer,
  albums: sliceAlbums.reducer,
  photos: slicePhotos.reducer,
});
