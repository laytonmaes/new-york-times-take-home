import React, { useState } from "react";

const NewsCards = ({ story }) => {
    let abstractShortened = story.abstract
    if ( abstractShortened.length > 25 ) {
        abstractShortened = abstractShortened.substring(0, 24) + "..."
    }

    return (
        <div className="Newscard-container">
            <header className="Newscard-header">
                <h2>{story.title}</h2>
            </header>
            <section className="Newscard-info">
                <p>{story.section}</p>
                <p>{story.published_date}</p>
            </section>
            <div className="Newscard-img">
                <img src={story.multimedia[0].url} alt="Article Image" />
            </div>
            <p className="Newscard-description">
                {abstractShortened}
            </p>
        </div>
    )
}

export default NewsCards;