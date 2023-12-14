import { useState, useEffect } from 'react'
import './Comments.css'
import { getArticleComments } from '../../../../utils/utils'
import CommentCard from './CommentCard'
import PostComment from './PostComment'
import Error from '../../../Errors/Error'

const Comments = ({article_id, isLoading, setIsLoading}) => {
    const [comments, setComments] = useState([])    
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        setIsLoading(true)
        getArticleComments(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [])
    


    return (
        <div className="comments">
            <h3>Comments</h3>
            <PostComment article_id={article_id} setComments={setComments} comments={comments} />
            {isLoading ? <h4>Loading...</h4> : null}
            {comments.length === 0 ? <p>No comments yet...</p> : null }
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </div>
    )
}

export default Comments