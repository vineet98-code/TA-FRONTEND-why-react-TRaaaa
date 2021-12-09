import React from 'react'
import {ArticleItems} from './ArticleItems';

export const Articles = (props) => {
    return (
        <div className = 'container flex'>
            <h3 className="text-center my-3">Articles lists</h3>
            {props.articles.map((article) => {
                return <ArticleItems article={article}/>
            })}          
        </div>
    )
}
