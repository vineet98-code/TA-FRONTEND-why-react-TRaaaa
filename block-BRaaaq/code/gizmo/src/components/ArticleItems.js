import React from 'react'
import PropTypes from 'prop-types'

const ArticleItems = (props) => {
    return (
        <div className="card ">
            <img src={props.urlToImage} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Visit Website</a>
                </div>
        </div>
    )
}

export default ArticleItems

ArticleItems.propTypes = {
    author: PropTypes.string
}