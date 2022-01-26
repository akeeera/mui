import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "../actions/getPhotos";
import { preloadedState } from "../store/preloadedState";

export const slicePhotos = createSlice({
  name: "photos",
  initialState: preloadedState.photos,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
