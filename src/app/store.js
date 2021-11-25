import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../features/SearchBar/searchBarSlice';
import redditReducer from '../API/redditSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchBarReducer,
    redditPosts: redditReducer
  },
});
