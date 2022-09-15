import React from "react";

const NewsCards = ({ articleSummary }) => {
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
            
        </div>
    )
}

export default NewsCards;