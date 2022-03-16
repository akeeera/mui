import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIService} from "../api/API";
import {Post} from "../types/post.type";

export const getPosts = createAsyncThunk("posts/getPosts", async (): Promise<Post[]> => {
    return await APIService.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
});


export const addPost = createAsyncThunk("posts/addPosts", async (body: { body: string, title: string, userId: number }): Promise<Post> => {
    return await APIService.post<Post>(`https://jsonplaceholder.typicode.com/posts`, body);
});
