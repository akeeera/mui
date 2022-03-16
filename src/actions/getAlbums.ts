import { createAsyncThunk } from "@reduxjs/toolkit";
import {Album} from "../types/album.type";
import {Urls} from "../api/urls";
import {APIService} from "../api/API";
import {Post} from "../types/post.type";

export const getAlbums = createAsyncThunk("albums/getAlbums", async (): Promise<Album[]> => {
  return await APIService.get<Album[]>(Urls.ALBUMS);
});
