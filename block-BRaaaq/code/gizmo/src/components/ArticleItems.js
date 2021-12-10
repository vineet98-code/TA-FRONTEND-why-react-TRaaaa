import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleItems = ({ article }) => {
    return (
        <div className="card">
            <img src={article.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <p className="card-text">{article.publishedAt}</p>
              <Link to="#" className="btn btn-primary">Read more</Link>
            </div>
        </div>
    )
}

