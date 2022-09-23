import React from "react";
import { NavLink } from "react-router-dom";
import "./Details.css"

const Details = ({ singleArticle }) => {

    const articleTags = singleArticle.des_facet.map((tag) => {
            return <p>{tag}, </p>
        })

    return (
        <section className="Details">
            <div className="Detail-Container">
                <h2>{singleArticle.title}</h2>
                <h3>{singleArticle.abstract}</h3>
                <div className="Link-box">
                    <h4>Link to Article: </h4>
                    <a href={singleArticle.url}>{singleArticle.url}</a>
                </div>
                <div className="Article-Tags">
                    <h4>Tags: </h4>
                    {articleTags}
                </div>
                <div className="Image-block">
                    <img src={singleArticle.multimedia[1].url} />
                    <p>{singleArticle.multimedia[1].caption}</p>
                </div>
            </div>
        </section>
    )
}

export default Details