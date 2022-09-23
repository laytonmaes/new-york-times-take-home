import React from "react";
import { NavLink } from "react-router-dom";

import NewsCard from "./NewsCard";

const Home = ({ articles, shownArticles, setSingleArticle }) => {
    let stories;
    let storiesDisplay;

    // conditional to allow user to search through the site for specific stories
    if(shownArticles.length > 0) {
        stories = shownArticles
    } else {
        stories = articles
    }

    //function to set single article
    const setNewArticle = (idIndex) => {
        console.log(stories[idIndex])
        setSingleArticle(stories[idIndex])
    } 

    // map to render cards onto home view.
    const storiesMap = () => {
        let keyNum = -1
        storiesDisplay = stories.map((story) => {
            keyNum += 1
            return (
                <NavLink 
                to={'/details'} 
                className="Nav" 
                key={keyNum} 
                id={keyNum}
                onClick={((event) => {
                    setNewArticle(event.currentTarget.id)
                })}
                >
                    <NewsCard story={story} key={keyNum} />
                </NavLink>
            )
        })
    }

    storiesMap()

    // render
    return (
        <section className="Details">
            {storiesDisplay}
        </section>
    )
}

export default Home;