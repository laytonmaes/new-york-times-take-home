import React from "react";
import { NavLink } from "react-router-dom";

import NewsCard from "./NewsCard";

const Home = ({ shownArticles, setSingleArticle }) => {
    let storiesDisplay;

    //function to set single article
    const setNewArticle = (idIndex) => {
        setSingleArticle(shownArticles[idIndex])
    } 

    // map to render cards onto home view.
    const storiesMap = () => {
        let keyNum = -1
        storiesDisplay = shownArticles.map((story) => {
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