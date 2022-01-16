import React from 'react';
import './App.css';
import { PostWall } from '../components/PostWall/PostWall';
import { Categories } from '../features/Categories/Categories';
import { Header } from '../components/Header/Header';

//ADD BANNER AT THE END TO COME BACK ANOTHER DAY OR CHOOSE A DIFFERENT CATEGORY AND A FOOTER

export function App() {

    return (
    <div className="App">
      <Header />
      <div className="main">
      <PostWall />
      <Categories />
      <a className="bottomLink" href="#">Jump to top</a>
      </div>
    </div>
  );
}

export default App;
