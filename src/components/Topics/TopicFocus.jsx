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
    const { artSort } = useContext(FilterContext)
    const [articleSort] = artSort

    const sortOptions = [
        { text: "Date (newest first)", sort_by: 'created_at', order: 'desc' }, 
        { text: "Date (oldest first)", sort_by: 'created_at', order: 'asc' }, 
        { text: "Comments (most first)", sort_by: 'comment_count', order: 'desc' }, 
        { text: "Comments (fewest first)", sort_by: 'comment_count', order: 'asc' }, 
        { text: "Votes (most first)", sort_by: 'votes', order: 'desc' }, 
        { text: "Votes (fewest first)", sort_by: 'votes', order: 'asc'}
    ]

    useEffect(() => {
        const {sort_by, order} = articleSort
        setIsLoading(true)
        getArticles({ params: { topic: slug, sort_by, order }})
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

    }, [articleSort])

    return (
        <div className='topic-focus'>
            <Link className='link' to="/topics">Back to topics</Link>
            <h3>Articles about {slug}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <SortSelector sortOptions={sortOptions} type='topic' topic={slug} />
            <Routes>
                <Route path='/*' element={<ArticleCard articles={articles} />} />
            </Routes>
        </div>
    )
}

export default TopicFocus