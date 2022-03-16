import { createAsyncThunk } from "@reduxjs/toolkit";
import {Album} from "../types/album.type";

export const getAlbums = createAsyncThunk("albums/getAlbums", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const albums: Album[] = await response.json();
  return albums;
});
