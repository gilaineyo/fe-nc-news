import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import Filters from './Filters'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'

const Articles = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        getArticles()
        .then((articles) => {
            setArticles(articles)
        })
    }, [])

    return (
        <div className='articles'>
            <h2>Articles</h2>
            <Filters />
            <ArticleCard articles={articles} />
            <PostArticle />
        </div>
    )
}

export default Articles