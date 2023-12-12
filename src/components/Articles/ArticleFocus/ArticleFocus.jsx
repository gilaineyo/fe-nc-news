import { getSingleArticle, patchArticle } from '../../../utils/utils'
import './ArticleFocus.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Comments from './Comments/Comments'

const ArticleFocus = ({isLoading, setIsLoading}) => {
    const [currArticle, setCurrArticle] = useState({})
    const [hasVoted, setHasVoted] = useState(false)
    const [localVotes, setLocalVotes] = useState(0)
    const {article_id} = useParams()
    
    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(article_id)
        .then((article) => {
            setCurrArticle(article)
            setLocalVotes(article.votes)
            setIsLoading(false)
        })
    }, [])
    

    const { title, author, body, created_at, comment_count, topic, article_img_url } = currArticle
    const postedAt = new Date(created_at)

    const handleVote = () => {
        const vote = { inc_votes: !hasVoted ? 1 : -1}
        setLocalVotes(localVotes + vote.inc_votes)
        patchArticle(article_id, vote)
        .then((article) => {
            setLocalVotes(article.votes)
            setHasVoted(!hasVoted)
        })
        .catch((err) => {
            if (hasVoted) {
                setLocalVotes(localVotes - 1)
            } else {
                setLocalVotes(localVotes + 1)
            }
            setHasVoted(!hasVoted)
        })
    }

    return (
        <div className='article-focus'>
            {isLoading ? <h4>Loading...</h4> : 
                <>
                <Link className="link" to={`/`}>
                    <button>Back to Articles</button>
                </Link>
                {isLoading ? <h4>Loading...</h4> : null}
                <h3>{title}</h3>
                <img src={article_img_url} alt="article image" />
                <p>{author}, {postedAt.toLocaleString()}</p>
                <p>{topic}</p>
                <p>Votes: {votes}, Comments: {comment_count}</p>
                <p>{body}</p>
                <button className={hasVoted ? "voted" : "not-voted"} onClick={() => {handleVote()}}>{localVotes} votes</button>
                <Comments article_id={article_id} isLoading={isLoading} setIsLoading={setIsLoading} />                
                </>}
        </div>
    )
}

export default ArticleFocus