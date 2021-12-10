import React from 'react'
import {ArticleItems} from './ArticleItems';

export const Articles = (props) => {
    return (
        <>
            <h3 className="text-center my-3">Articles lists</h3>
        <div className = 'container d-flex justify-content-evenly align-content-start flex-wrap'>
            {props.articles.map((article) => {
                return <ArticleItems article={article}/>
            })}          
        </div>
        </>
    )
}