import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await response.json();
  console.log(photos);
  return photos;
});
