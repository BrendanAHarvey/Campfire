import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar/navbar';
import MainFeed from './components/MainFeed/mainFeed';
import Subreddit from './components/Subreddit/subreddit';
import Search from './components/Navbar/Search/search'

function App() {

  return (
    // Header and Navbar with autocomplete search function
    <div className="App">
      <div className='navbar'>
        <input type='text' className='searchbox' placeholder='Search'>
        </input> 
        <i></i>
      </div>
    {/* mainfeed  */}
      <div className='mainfeed'>
        <MainFeed />
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
        <h1>MainFeed placeholder</h1>
      </div>

      {/*Subreddit/ Ember feed  */}
      <div className='embers'>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        <h2>Ember/Subreddit placeholder</h2>
        
      </div>
    </div>
  );
}

export default App;
