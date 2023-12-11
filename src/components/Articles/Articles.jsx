import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import Filters from './Filters'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'
import ArticleFocus from './ArticleFocus'
import {Routes, Route} from 'react-router-dom'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [currArticle, setCurrArticle] = useState('')
    
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
            <ArticleCard articles={articles} setCurrArticle={setCurrArticle}/>
            <Routes>
                <Route path='/articles/add-article' element={<PostArticle />} />
                <Route path='/articles/:article_id' element={<ArticleFocus currArticle={currArticle} />} />
            </Routes>
        </div>
    )
}

export default Articles