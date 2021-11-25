import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Category } from "./Category";
import { fetchCategories } from "../../API/redditSlice";
import './Categories.css'



export const Categories = () => {
    const categories = useSelector(state => state.redditPosts.categories);
    const dispatch = useDispatch();
    //const selectedCategory = useSelector(state => state.redditPosts.selectedCategory);
    
    useEffect(() => {
        dispatch(fetchCategories())
      }, []);
   
    return (
        <div className="categories" style={{"min-width": "20%"}}>
        <ul style={{"padding": "0"}}>
        {categories.map((category, index) => (
            
            <Category category={category} key={index}/>
            
            
        ))}</ul>
        </div>
    )
}