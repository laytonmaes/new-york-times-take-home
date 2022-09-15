import React from "react";
import { NavLink } from "react-router-dom";

import NewsCard from "./NewsCard";

const Home = ({ articles, shownArticles }) => {
    let stories;

    if(shownArticles.length > 0) {
        stories = shownArticles
    } else {
        stories = articles
    }

    const storiesDisplay = stories.map((story) => {
        return <NewsCard story={story} />
    })
    return (
        <section className="Details">
            {storiesDisplay}
        </section>
    )
}

export default Home;