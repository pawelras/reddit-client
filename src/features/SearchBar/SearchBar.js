import { React } from 'react';
import { editSearchTerm } from './searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm } from './searchBarSlice';
import { searchPosts } from '../../API/redditSlice';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const SearchBar = () => {

    const searchIcon = <FontAwesomeIcon icon={faSearch} className="searchIcon" />

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

            <span onClick={handleSubmit}>{searchIcon}</span>
            

        </div>
    )
}
