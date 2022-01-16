import { React } from 'react';
import { SearchBar } from '../../features/SearchBar/SearchBar';
import './Header.css';
import logo1 from '../../images/logo1.png';



export const Header = () => {


    return(
        <div className="headerDiv">
            <div className='logoContainer'>
                <a href="/"><img className="logo" src={logo1}/></a>
            </div>
            <SearchBar />
        </div>
    )

}