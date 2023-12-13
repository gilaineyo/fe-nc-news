import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import Filters from './Filters'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'
import ArticleFocus from './ArticleFocus/ArticleFocus'
import {Routes, Route, Link} from 'react-router-dom'

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
            {isLoading ? <h3>Loading...</h3> : null}
            <Filters />
            <Routes>
                <Route path='/' element={<ArticleCard articles={articles} />} />
                <Route path='/add-article' element={<PostArticle />} />
                <Route path='/:article_id' element={<ArticleFocus isLoading={isLoading} setIsLoading={setIsLoading} />} />
            </Routes>
        </div>
    )
}

export default Articles