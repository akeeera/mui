import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/getUsers";
import { preloadedState } from "../store/preloadedState";

export const sliceUsers = createSlice({
  name: "users",
  initialState: preloadedState.users,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
