import React from "react";
import { NavLink } from "react-router-dom";

import NewsCards from "./NewsCards";

const Home = ({ articles, shownArticles }) => {
    let stories;

    if(shownArticles.length > 0) {
        stories = shownArticles
    } else {
        stories = articles
    }

    const storiesDisplay = stories.map((story) => {
        return <NewsCards story={story} />
    })
    return (
        <section className="Details">
            {storiesDisplay}
        </section>
    )
}

export default Home;