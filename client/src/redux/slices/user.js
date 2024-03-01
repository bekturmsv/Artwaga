import axiosBaseUrl from "../../axios";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (filters) => {
    const { data } = await axiosBaseUrl.get("api/users/", { params: filters });
    return data;
  }
);

export const fetchRemoveUser = createAsyncThunk(
  "users/fetchRemoveUser",
  async (id) => {
    await axiosBaseUrl.delete(`api/users/${id}`);
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        (state.status = "loading"), (state.items = []);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.status = "loaded"), (state.items = action.payload);
      })
      .addCase(fetchUsers.rejected, (state) => {
        (state.status = "error"), (state.items = []);
      })
      .addCase(fetchRemoveUser.pending, (state, action) => {
        state.items = state.items.filter(
          (todo) => todo._id !== action.meta.arg
        );
      });
  },
});

export const userReducer = userSlice.reducer;
