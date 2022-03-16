import { createAsyncThunk } from "@reduxjs/toolkit";
import {User} from "../types/user.type";
import {Urls} from "../api/urls";
import {APIService} from "../api/API";
import {Album} from "../types/album.type";
import {Post} from "../types/post.type";

export const getUsers = createAsyncThunk("users/getUsers", async (): Promise<User[]> => {
  return await APIService.get<User[]>(Urls.USERS);
});
