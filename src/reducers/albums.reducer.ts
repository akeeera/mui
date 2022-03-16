import { createSlice } from "@reduxjs/toolkit";
import { getAlbums } from "../actions/getAlbums";
import { preloadedState } from "../store/preloadedState";

export const sliceAlbums = createSlice({
  name: "albums",
  initialState: preloadedState.albums,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbums.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
