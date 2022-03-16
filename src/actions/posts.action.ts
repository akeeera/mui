import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIService} from "../api/API";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    return await APIService.get(`https://jsonplaceholder.typicode.com/posts`);
});

export type AddPostProps = {
    body: string,
    title: string,
    userId: number
}

export const addPost = createAsyncThunk("posts/addPosts", async (body: AddPostProps) => {
    return await APIService.post(`https://jsonplaceholder.typicode.com/posts`, body);
});
