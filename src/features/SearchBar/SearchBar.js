import { React } from 'react';
import { editSearchTerm } from './searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm } from './searchBarSlice';
import { searchPosts } from '../../API/redditSlice';
import './SearchBar.css';

export const SearchBar = () => {

const dispatch = useDispatch();
const searchTerm = useSelector(selectSearchTerm);


const handleChange = (e) => {
    e.preventDefault()
    dispatch(editSearchTerm(e.target.value))
 }

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPosts(searchTerm));   

}

const handleEnterPress = (e) => {
    if ( e.keyCode === 13 ) {
        e.preventDefault();
        dispatch(searchPosts(searchTerm));
    }

}

    return (
        <div className="searchBarDiv">
            <input className="searchBar"
                onChange={handleChange}
                onKeyUp={handleEnterPress}
                id="searchTerm" 
                type="text" />

            <i onClick={handleSubmit}class="fas fa-search fa-2x"></i>

        </div>
    )
}
