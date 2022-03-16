import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIService} from "../api/API";
import {Post} from "../types/post.type";

export const getPosts = createAsyncThunk("posts/getPosts", async (): Promise<Post[]> => {
    return await APIService.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
});

export type AddPostProps = {
    body: string,
    title: string,
    userId: number
}

export const addPost = createAsyncThunk("posts/addPosts", async (body: AddPostProps): Promise<Post> => {
    return await APIService.post<Post>(`https://jsonplaceholder.typicode.com/posts`, body);
});
