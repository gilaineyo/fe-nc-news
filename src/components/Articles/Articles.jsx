import { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'
import ArticleFocus from './ArticleFocus/ArticleFocus'
import {Routes, Route} from 'react-router-dom'
import Error from '../Errors/Error'

const Articles = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])
    const [errorMsg, setErrorMsg] = useState('')


    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [])

    if (errorMsg) return <Error errorMsg={errorMsg} />

    return (
        <div className='articles'>
            <h2>Articles</h2>
            {isLoading ? <h3>Loading...</h3> : null}
            <Routes>
                <Route path='/' element={<ArticleCard articles={articles} />} />
                <Route path='/add-article' element={<PostArticle />} />
                <Route path='/:article_id' element={<ArticleFocus isLoading={isLoading} setIsLoading={setIsLoading} />} />
            </Routes>
        </div>
    )
}

export default Articles