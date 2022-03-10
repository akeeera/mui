import {createSlice} from "@reduxjs/toolkit";
import {addPost, getPosts} from "../actions/posts.action";
import {preloadedState} from "../store/preloadedState";

export const slicePosts = createSlice({
    name: "posts",
    initialState: preloadedState.posts,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            const posts = [...state.data];
            posts.unshift(action.payload);
            state.data = posts;
        });
    },
});
