import { getSingleArticle, patchArticle } from '../../../utils/utils'
import './ArticleFocus.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Comments from './Comments/Comments'
import Error from '../../Errors/Error'

const ArticleFocus = ({isLoading, setIsLoading}) => {
    const [errorMsg, setErrorMsg] = useState('')
    const [votingError, setVotingError] = useState(false)
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
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [])
    

    const { title, author, body, created_at, comment_count, votes, topic, article_img_url } = currArticle
    const postedAt = new Date(created_at)

    const handleVote = () => {
        const vote = { inc_votes: !hasVoted ? 1 : -1}
        setLocalVotes((localVotes) => { return localVotes + vote.inc_votes})
        patchArticle(article_id, vote)
        .then((result) => {
                setVotingError(false)
                setLocalVotes(result.votes)
                setHasVoted(!hasVoted)
        })
        .catch(() => {
            setLocalVotes((localVotes) => { return localVotes - vote.inc_votes})
            setVotingError(true)
        })
    }
    

    if (errorMsg !== '') return <Error errorMsg={errorMsg} />

    return (
        <div className='article-focus'>
                <Link className="link" to={`/articles`}>Back to Articles</Link>
                {isLoading ? <h4>Loading...</h4> : null}
                <h3>{title}</h3>
                <img src={article_img_url} alt="article image" />
                <p>{author}, {postedAt.toLocaleString()}</p>
                <p>{topic}</p>
                <p>Votes: {votes}, Comments: {comment_count}</p>
                <p>{body}</p>
                <button className={hasVoted ? "voted" : "not-voted"} onClick={() => {handleVote()}}>{localVotes} votes</button>
                {votingError ? <p>Oops! Your vote hasn't been registered! Try again later.</p> : null}
                <Comments article_id={article_id} isLoading={isLoading} setIsLoading={setIsLoading} /> 
        </div>
    )
}

export default ArticleFocus