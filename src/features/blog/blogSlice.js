import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // Blog reducers will go here
  }
});

export default blogSlice.reducer;