import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import getArticles from '../apiCalls';

// ==================== components ==================== //
import Home from './Home';
import Details from './Details';

// ==================== assets ==================== //
import  searchIcon from "../assets/search_icon.svg"

// ==================== app ==================== //
function App() {
  const [articles, setArticles] = useState([])
  const [shownArticles, setShownArticles] = useState([])

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.results)
      console.log(articles)
      console.log(data.results)
    })
  }, [])

  const filterArticles = (searchTerm) => {
    setShownArticles()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NY Times: Top Stories</h1>
      </header>
      <main className='App-body'>
        <div className='Search-container'>
        <input className="Search-bar" type="text" placeholder='Search...' />
        <button className='Submit'>{searchIcon}</button>
        </div>
        <Route 
          exact path="/"
          render={() => {
            return <Home />
          }} 
        />
        <Route 
          exact path="/details"
          render={() => {
            return <Details />
          }}
        />
      </main>
    </div>
  );
}

export default App;
