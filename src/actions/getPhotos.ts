import {createAsyncThunk} from "@reduxjs/toolkit";
import {Photo} from "../types/photo.type";
import {Urls} from "../api/urls";
import {APIService} from "../api/API";
import {Post} from "../types/post.type";

export const getPhotos = createAsyncThunk("photos/getPhotos", async (id): Promise<Photo[]> => {
    return await APIService.get<Photo[]>(Urls.PHOTOS);
});
