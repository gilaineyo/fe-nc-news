import { useState, useEffect } from 'react'
import './Comments.css'
import { getArticleComments } from '../../../../utils/utils'
import CommentCard from './CommentCard'

const Comments = ({article_id, isLoading, setIsLoading}) => {
    const [comments, setComments] = useState([])    
    
    useEffect(() => {
        setIsLoading(true)
        getArticleComments(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="comments">
            <h3>Comments</h3>
            {isLoading ? <h4>Loading...</h4> : null}
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </div>
    )
}

export default Comments