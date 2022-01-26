import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAlbums = createAsyncThunk("albums/getAlbums", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const albums = await response.json();
  return albums;
});
