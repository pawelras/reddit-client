import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../Post/Post";
import { fetchPostsByCategory } from "../../API/redditSlice";

export const PostWall = () => {

    const dispatch = useDispatch();
    const category = useSelector(state=> state.redditPosts.selectedCategory);

    useEffect(() => {
        dispatch(fetchPostsByCategory(category));
        }, [dispatch, category]);
    
    const posts = useSelector(state => state.redditPosts.posts);
    
   
    
    return (
        <div style={{"min-width": "50%", "max-width": "500px"}}>
            <h3>Current category: {category}</h3>
          {posts.map((post, index) => (
              <Post key={index} post={post} />
          ))}
        </div>
    )
}
