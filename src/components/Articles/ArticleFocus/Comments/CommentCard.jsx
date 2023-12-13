import { deleteComment, getUserDetails } from "../../../../utils/utils"
import { useEffect, useState, useContext } from "react"
import './CommentCard.css'
import { UserContext } from "../../../../contexts/UserContext"

const CommentCard = ({comment, comments, setComments}) => {
    const [authorProfile, setAuthorProfile] = useState({})
    const [isDeleted, setIsDeleted] = useState(false)
    const [deleteInProgress, setDeleteInProgress] = useState(false)
    const {user} = useContext(UserContext)
    const { author, body, votes, created_at, comment_id } = comment
    const postedAt = new Date(created_at)

    useEffect(() => {
        getUserDetails(author)
        .then((validUser) => {
            setAuthorProfile(validUser)
        })
    }, [])

    const handleDelete = () => {
        setDeleteInProgress(true)
        deleteComment(comment_id)
        .then(() => {
            setDeleteInProgress(false)
            setIsDeleted(true)  
        })
    }

    if (deleteInProgress) return (
        <div className="deleting">
            <img className='avatar' src={authorProfile.avatar_url} alt="user avatar" />
            <p className='posted-details'>{author}, {postedAt.toLocaleString()}</p>
            <p className='comment-body'>{body}</p>
            <button className='upvote' disabled>Votes: {votes}</button>
            {authorProfile.username === user.username 
                ? <button className="delete" disabled>Delete</button> 
                : null}
        </div>
    )

    if (isDeleted) return <p>Comment has been deleted.</p>

    return (
        <div className="comment-card">
            <img className='avatar' src={authorProfile.avatar_url} alt="user avatar" />
            <p className='posted-details'>{author}, {postedAt.toLocaleString()}</p>
            <p className='comment-body'>{body}</p>
            <button className='upvote'>Votes: {votes}</button>
            {authorProfile.username === user.username 
                ? <button className="delete" onClick={handleDelete}>Delete</button> 
                : null}
        </div>
    )
}

export default CommentCard