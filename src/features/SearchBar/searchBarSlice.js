import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchTerm',
    initialState: 'test',
    reducers: {
        editSearchTerm: ( state, action ) => {
           return action.payload;
           //state.searchTerm = action.payload returns an error

        }
    }
})


export const selectSearchTerm = state => state.searchTerm
export const { editSearchTerm } = searchBarSlice.actions;
export default searchBarSlice.reducer