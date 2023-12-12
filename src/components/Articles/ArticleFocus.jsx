import { getSingleArticle } from '../../utils/utils'
import './ArticleFocus.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ArticleFocus = ({isLoading, setIsLoading}) => {
    const [currArticle, setCurrArticle] = useState({})
    const article_id = useParams()
    
    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(article_id.article_id)
        .then((article) => {
            setCurrArticle(article)
            setIsLoading(false)
        })
    }, [])
    
    const { title, author, body, created_at, comment_count, votes, topic, article_img_url } = currArticle
    const postedAt = new Date(created_at)

    return (
        <div className='article-focus'>
            <h3>{title}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <img src={article_img_url} alt="article image" />
            <p>{author}, {postedAt.toLocaleString()}</p>
            <p>{topic}</p>
            <p>Votes: {votes}, Comments: {comment_count}</p>
            <p>{body}</p>
            <Link className="link" to={`/articles`}>
                <button>Back to Articles</button>
            </Link>
        </div>
    )
}

export default ArticleFocus