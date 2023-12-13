import './TopicFocus.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom'
import ArticleCard from '../Articles/ArticleCard'
import { getArticles } from '../../utils/utils'
import SortSelector from '../Filters/SortSelector'
import { FilterContext } from '../../contexts/FilterContext'

const TopicFocus = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])
    const {slug} = useParams()
    const params = { params: { topic: slug }}
    const { setSortOptions } = useContext(FilterContext)

    const sorts = [
        { text: "Date (newest first)", sort_by: 'created_at', order: 'desc' }, 
        { text: "Date (oldest first)", sort_by: 'created_at', order: 'asc' }, 
        { text: "Comments (most first)", sort_by: 'comment_count', order: 'desc' }, 
        { text: "Comments (fewest first)", sort_by: 'comment_count', order: 'asc' }, 
        { text: "Votes (most first)", sort_by: 'votes', order: 'desc' }, 
        { text: "Votes (fewest first)", sort_by: 'votes', order: 'asc'}
    ]

    useEffect(() => {
        setSortOptions(sorts)
        setIsLoading(true)
        getArticles(params)
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })

    }, [])

    return (
        <div className='topic-focus'>
            <Link className='link' to="/topics">Back to topics</Link>
            <h3>Articles about {slug}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <SortSelector />
            <Routes>
                <Route path='/*' element={<ArticleCard articles={articles} />} />
            </Routes>
        </div>
    )
}

export default TopicFocus