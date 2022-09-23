import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import getArticles from '../apiCalls';
import mockData from '../mockData';

// ==================== components ==================== //
import Home from './Home';
import Details from './Details';

// ==================== assets ==================== //
import  searchIcon from "../assets/search_icon.svg"

// ==================== app ==================== //
function App() {
  const [articles, setArticles] = useState([])
  const [shownArticles, setShownArticles] = useState([])

  // get and set base articles from api on page load
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.results)
      console.log(articles)
      console.log(data.results)
    })
    .catch(err => console.log(err))
  }, [])

  // filter through basic articles and return filtered list
  const filterArticles = (event) => {
    event.preventDefault()
    setShownArticles(mockData)
    console.log(shownArticles)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NY Times: Top Stories</h1>
      </header>
      <main className='App-body'>
        <form className='Search-form'>
        <input className="Search-bar" type="text" placeholder='Search...' />
        <button 
        className='Submit' 
        type='submit'><img 
        src={searchIcon} 
        alt="search" 
        onClick={(event) => {filterArticles(event)}}
        /></button>
        </form>
        <Route 
          exact path="/"
          render={() => {
            return <Home articles={articles} shownArticles={shownArticles}/>
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
