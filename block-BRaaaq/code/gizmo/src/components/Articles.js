import React from 'react'
import  ArticleItems  from './ArticleItems'
import  allArticles from '../data'


const Articles = () => {
  return (
    <div className = 'd-flex justify-content-evenly flex-wrap my-4'>
            {/* <h3 className="text-center my-3">Articles lists</h3> */}
            {allArticles.map((article) => {
                return <ArticleItems key={article.url} {...article} />
            })}          
        </div>
  )
}

export default Articles

