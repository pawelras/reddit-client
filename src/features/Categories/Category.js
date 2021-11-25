import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../../API/redditSlice";
import redditThumb from '../../images/redditThumb.png';
import './Category.css';

export const Category = (props) => {

    const dispatch = useDispatch();
    const currentCategory = useSelector(state => state.redditPosts.selectedCategory);
    const handleCategoryChange = (e) => {
        e.preventDefault();
        
        dispatch(setCategory(e.currentTarget.id));
        
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        
    
    }
    return (
        
        <a href="#" id={props.category.url} onClick={handleCategoryChange}><li style={{"background-color": currentCategory === props.category.url ? "#fff2e6" : "white", "text-decoration": "none"}} className="categoryTile">

        { !props.category.thumbnail && <img alt="Category Thumbnail" className="categoryThumb" src={redditThumb} />}

        { props.category.thumbnail && <img alt="Category Thumbnail" className="categoryThumb" src={props.category.thumbnail} />}
         {props.category.displayName}
        </li>
        </a>
    )
}