import React, { useState } from "react";

const NewsCards = ({ articleSummary }) => {
    let abstractShortened = articleSummary.abstract
    if ( abstractShortened.length > 25 ) {
        abstractShortened = abstractShortened.substring(0, 24) + "..."
    }

    return (
        <div className="Newscard-container">
            <header className="Newscard-header">
                <h2>{articleSummary.title}</h2>
            </header>
            <section className="Newscard-info">
                <p>{articleSummary.section}</p>
                <p>{articleSummary.published_date}</p>
            </section>
            <div className="Newscard-img">
                <img src={articleSummary.multimedia[0].url} alt="Article Image" />
            </div>
            <p className="Newscard-description">
                {abstractShortened}
            </p>
        </div>
    )
}

export default NewsCards;