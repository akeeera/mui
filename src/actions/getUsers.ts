import { createAsyncThunk } from "@reduxjs/toolkit";
import {User} from "../types/user.type";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users: User[] = await response.json();
  return users;
});
