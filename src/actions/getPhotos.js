import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const photos = await response.json();
  console.log(photos);
  return photos;
});
