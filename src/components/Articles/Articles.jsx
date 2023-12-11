import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import Filters from './Filters'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'

const Articles = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])
    
    return (
        <div className='articles'>
            <h2>Articles</h2>
            {isLoading ? <h3>Loading...</h3> : null }
            <Filters />
            <ArticleCard articles={articles} />
            <PostArticle />
        </div>
    )
}

export default Articles