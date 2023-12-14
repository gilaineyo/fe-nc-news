import './TopicFocus.css'
import { useState, useEffect } from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom'
import ArticleCard from '../Articles/ArticleCard'
import { getArticles } from '../../utils/utils'
import Error from '../Errors/Error'

const TopicFocus = ({isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const {slug} = useParams()
    const params = { params: { topic: slug }}

    useEffect(() => {
        setIsLoading(true)
        getArticles(params)
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
        <div className='topic-focus'>
            <Link className='link' to="/topics">Back to topics</Link>
            <h3>Articles about {slug}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <Routes>
                <Route path='/*' element={<ArticleCard articles={articles} />} />
            </Routes>
        </div>
    )
}

export default TopicFocus