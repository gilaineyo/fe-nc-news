import { useEffect, useState, useContext } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'
import ArticleFocus from './ArticleFocus/ArticleFocus'
import {Routes, Route} from 'react-router-dom'
import { FilterContext } from '../../contexts/FilterContext'
import Error from '../Errors/Error'

const Articles = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const { artSort } = useContext(FilterContext)
    const [articleSort] = artSort    
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        setIsLoading(true)
        getArticles({params: articleSort})
        .then((articles) => {
            if(articleSort.sort_by === 'comment_count' && articleSort.order === 'asc') {
                const sortedArticles = [...articles].sort((a, b) => a.comment_count - b.comment_count)
                setArticles(sortedArticles)
            } else if (articleSort.sort_by === 'comment_count') {
                const sortedArticles = [...articles].sort((a, b) => b.comment_count - a.comment_count)
                setArticles(sortedArticles)
            } else {
                setArticles(articles)
            }
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [articleSort])

    if (errorMsg) return <Error errorMsg={errorMsg} />

    return (
        <div className='articles'>
            {isLoading ? <h3>Loading...</h3> : null }
            <Routes>
                <Route path='/' element={<ArticleCard articles={articles} />} />
                <Route path='/add-article' element={<PostArticle />} />
                <Route path='/:article_id' element={<ArticleFocus />} />
            </Routes>
        </div>
    )
}

export default Articles