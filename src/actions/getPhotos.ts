import { createAsyncThunk } from "@reduxjs/toolkit";
import {Photo} from "../types/photo.type";

export const getPhotos = createAsyncThunk("photos/getPhotos", async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const photos: Photo[] = await response.json();
  return photos;
});
