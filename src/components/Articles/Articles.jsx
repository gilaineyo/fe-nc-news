import { useEffect, useState, useContext } from 'react'
import ArticleCard from './ArticleCard'
import './Articles.css'
import PostArticle from './PostArticle'
import { getArticles } from '../../utils/utils'
import ArticleFocus from './ArticleFocus/ArticleFocus'
import {Routes, Route} from 'react-router-dom'
import SortSelector from '../Filters/SortSelector'
import { FilterContext } from '../../contexts/FilterContext'


const Articles = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])
    const { artSort } = useContext(FilterContext)
    const [articleSort, setArticleSort] = artSort

    const sortOptions = [
        { text: "Date (newest first)", sort_by: 'created_at', order: 'desc' }, 
        { text: "Date (oldest first)", sort_by: 'created_at', order: 'asc' }, 
        { text: "Comments (most first)", sort_by: 'comment_count', order: 'desc' }, 
        { text: "Comments (fewest first)", sort_by: 'comment_count', order: 'asc' }, 
        { text: "Votes (most first)", sort_by: 'votes', order: 'desc' }, 
        { text: "Votes (fewest first)", sort_by: 'votes', order: 'asc'}
    ]
    
    useEffect(() => {
        setIsLoading(true)
        getArticles({params: articleSort})
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [articleSort])


    return (
        <div className='articles'>
            <h2>Articles</h2>
            {isLoading ? <h3>Loading...</h3> : null}
            <SortSelector sortOptions={sortOptions} type='articles'/>
            <Routes>
                <Route path='/' element={<ArticleCard articles={articles} />} />
                <Route path='/add-article' element={<PostArticle />} />
                <Route path='/:article_id' element={<ArticleFocus isLoading={isLoading} setIsLoading={setIsLoading} />} />
            </Routes>
        </div>
    )
}

export default Articles