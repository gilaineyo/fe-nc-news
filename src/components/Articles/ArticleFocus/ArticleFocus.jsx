import { getSingleArticle } from '../../../utils/utils'
import './ArticleFocus.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Comments from './Comments/Comments'

const ArticleFocus = ({isLoading, setIsLoading}) => {
    const [currArticle, setCurrArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(article_id)
        .then((article) => {
            setCurrArticle(article)
            setIsLoading(false)
        })
    }, [])
    
    const { title, author, body, created_at, comment_count, votes, topic, article_img_url } = currArticle
    const postedAt = new Date(created_at)

    return (
        <div className='article-focus'>
            <Link className="link" to={`/`}>
                <button>Back to Articles</button>
            </Link>
            <h3>{title}</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            <img src={article_img_url} alt="article image" />
            <p>{author}, {postedAt.toLocaleString()}</p>
            <p>{topic}</p>
            <p>Votes: {votes}, Comments: {comment_count}</p>
            <p>{body}</p>
            <Comments article_id={article_id} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
    )
}

export default ArticleFocus