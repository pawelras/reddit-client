import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  
const rootUrl = 'https://www.reddit.com/';


export const fetchPostsByCategory = createAsyncThunk(
    'redditPosts/fetchPostsByCategory',
    async (category, thunkAPI) => {
        const data = await fetch(`${rootUrl}${category}.json`);
        const json = await data.json();
        console.log(json);
       
        const objects = json.data.children.map(item => ({
            title: item.data.title,
            url: item.data.url,
            text: item.data.selftext,
            author: item.data.author,
            thumbnail: item.data.icon_img,
            media: item.data.media,
            permalink: item.data.permalink,

        })
        )
        
        return objects;
        
    }

);


export const fetchCategories = createAsyncThunk(
    'redditPosts/fetchCategories',
    async (thunkAPI) => {
        
        const data = await fetch('https://www.reddit.com/subreddits.json');
        const json = await data.json();
        const objects = json.data.children.map(item => ({
            displayName: item.data.display_name,
            url: item.data.url,
            thumbnail: item.data.icon_img,
            
        })
        )
        
        return objects;

    }
)


export const searchPosts = createAsyncThunk(
    'redditPosts/searchPosts', 
    async (searchTerm, thunkAPI) => {
        const data = await fetch(`${rootUrl}search.json?q=${searchTerm}`);
        const json = await data.json();
        
        const objects = json.data.children.map(item => ({
            title: item.data.title,
            url: item.data.url,
            text: item.data.selftext,
            author: item.data.author,
            thumbnail: item.data.icon_img,
            media: item.data.media,
            permalink: item.data.permalink,
            

        })
        )
        
        return objects;
        
    }
)

export const fetchComments = createAsyncThunk(
    'redditPosts/fetchComments',
    async (permalink) => {
        const data = await fetch(`${rootUrl}${permalink}.json`)
        const json = await data.json();
        
        

        
        const comments = json[1].data.children.map(item => ({
        author: item.data.author,
        body: item.data.body}
        ))
                
        
        const object = [permalink, comments]
        
       
        return object;

    }
)

export const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        isPostsLoading: false,
        postsHasError: false,
        isCategoriesLoading: false,
        categoriesHasError: false,
        categories: [],
        selectedCategory: '/r/pics',
        commentsByPost: [],
        isCommentsLoading: false,
        commentsHasError: false
    },

    reducers: {

        'setCategory': (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
    extraReducers: {

        [fetchPostsByCategory.pending]: (state, action) => {
            state.isPostsLoading = true;
            state.postsHasError = false;
        },

        [fetchPostsByCategory.fulfilled]: (state, action) => {
            state.isPostsLoading = false;
            state.postsHasError = false;
            state.posts = action.payload;
        },

        [fetchPostsByCategory.rejected]: (state, action) => {
            state.isPostsLoading = false;
            state.postsHasError = false;
        },

        [fetchCategories.pending]: (state, action) => {
            state.isCategoriesLoading = true;
            state.categoriesHasError = false;
        },

        [fetchCategories.fulfilled]: (state, action) => {
            state.isCategoriesLoading = false;
            state.categoriesHasError = false;
            state.categories = action.payload
        },

        [fetchCategories.rejected]: (state, action) => {
            state.isCategoriesLoading = false;
            state.categoriesHasError = true;
        },

        [searchPosts.pending]: (state, action) => {
            state.isPostsLoading = true;
            state.postsHasError = false;
        },

        [searchPosts.fulfilled]: (state, action) => {
            state.isPostsLoading = false;
            state.postsHasErrorstate = false
            state.posts = action.payload;
        },

        [searchPosts.rejected]: (state, action) => {
            state.isPostsLoading = false;
            state.postsHasError = true;
        },

        [fetchComments.pending]: (state, action) => {
            state.isCommentsLoading = true;
            state.commentsHasError = false;
        },

        [fetchComments.fulfilled]: (state, action) => {
            state.isCommentsLoading = false;
            state.commentsHasError = false;
            state.commentsByPost = [...state.commentsByPost, 
            {[action.payload[0]]: action.payload[1]}];        
            
        },

        [fetchComments.pending]: (state, action) => {
            state.isCommentsLoading = false;
            state.commentsHasError = true;
        },        

    }
})


export const selectPosts = (state) => state.posts;
export default redditSlice.reducer;
export const { setCategory } = redditSlice.actions
