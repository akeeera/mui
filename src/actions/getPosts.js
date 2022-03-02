import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIService} from "../api/API";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    return await APIService.get(`https://jsonplaceholder.typicode.com/posts`);
});
