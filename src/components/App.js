import React, { useState, useEffect } from 'react';
import './App.css';
import { NavLink, Route } from "react-router-dom";
import getArticles from '../apiCalls';
import mockData from '../mockData';
import emptyArticle from '../emptyArticle';

// ==================== components ==================== //
import Home from './Home';
import Details from './Details';

// ==================== assets ==================== //
import  searchIcon from "../assets/search_icon.svg"

// ==================== app ==================== //
function App() {
  const [articles, setArticles] = useState([])
  const [shownArticles, setShownArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState(emptyArticle)
  const [query, setQuery] = useState("")

  // get and set base articles from api on page load
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.results)
    })
    .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    setShownArticles(articles)
  }, [articles])

  useEffect(() => {
    setShownArticles(
      articles.filter(article => {
        if (query === "") {
          return article
        } else if (article.title.toLowerCase().includes(query.toLowerCase())) {
          return article
        }
      })
    )    
  }, [query])
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to={"/"}>
          <h1>NY Times: Top Stories</h1>
        </NavLink>
      </header>

      <main className='App-body'>
        <Route 
          exact path="/"
          render={() => {
           return (
            <div className='Main-Page'>
              <form className='Search-form'>
                <input 
                className="Search-bar" 
                type="text" 
                placeholder='Search...' 
                onChange={event => setQuery(event.target.value)}
                />
              </form>
              <Home 
                articles={articles} 
                shownArticles={shownArticles} 
                setSingleArticle={setSingleArticle} 
              />
            </div>
            )
          }} 
        />
        <Route 
          exact path="/details"
          render={() => {
            return <Details singleArticle={singleArticle} />
          }}
        />
      </main>
    </div>
  );
}

export default App;
