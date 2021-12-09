import React from 'react'

export const ArticleItems = ({article}) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}
