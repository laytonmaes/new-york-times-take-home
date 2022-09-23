import React from "react";
import { NavLink } from "react-router-dom";

import NewsCard from "./NewsCard";

const Home = ({ articles, shownArticles }) => {
    let stories;

    // conditional to allow user to search through the site for specific stories
    if(shownArticles.length > 0) {
        stories = shownArticles
    } else {
        stories = articles
    }
    // map to render cards onto home view.
    const storiesDisplay = stories.map((story) => {
        return <NewsCard story={story} />
    })
    // render
    return (
        <section className="Details">
            {storiesDisplay}
        </section>
    )
}

export default Home;