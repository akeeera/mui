import {createAsyncThunk} from "@reduxjs/toolkit";
import {APIService} from "../api/API";
import {Post} from "../types/post.type";
import {Urls} from "../api/urls";

export const getPosts = createAsyncThunk("posts/getPosts", async (): Promise<Post[]> => {
    return await APIService.get<Post[]>(Urls.POSTS);
});


export const addPost = createAsyncThunk("posts/addPosts", async (body: { body: string, title: string, userId: number }): Promise<Post> => {
    return await APIService.post<Post>(Urls.POSTS, body);
});
