import { React } from 'react';
import { SearchBar } from '../../features/SearchBar/SearchBar';
import logo from '../../images/reddit.gif';
import './Header.css';
import letterA from '../../images/letterA.png'


export const Header = () => {


    return(
        <div className="headerDiv">
        <img className="logo" src={logo}/> 
        <span>25Reddits <img src={letterA} />&nbsp;Day
        </span><SearchBar />
           </div>
    )

}