import './TopicFocus.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom'
import ArticleCard from '../Articles/ArticleCard'
import { getArticles } from '../../utils/utils'
import Error from '../Errors/Error'
import { FilterContext } from '../../contexts/FilterContext'

const TopicFocus = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const {slug} = useParams()
    const { artSort } = useContext(FilterContext)
    const [articleSort] = artSort

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
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [articleSort])

    if (errorMsg) return <Error errorMsg={errorMsg} /> 

    return (
        <div className='topic-focus'>
            <Link className='link' to="/topics">Back to topics</Link>
            <h3>Articles about {slug}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <Routes>
                <Route path='/*' element={<ArticleCard articles={articles} type='topic' topic={slug} />} />
            </Routes>
        </div>
    )
}

export default TopicFocus