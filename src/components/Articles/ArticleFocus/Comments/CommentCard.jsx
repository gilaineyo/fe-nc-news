import { getUserDetails } from "../../../../utils/utils"
import { useEffect, useState } from "react"
import './CommentCard.css'

const CommentCard = ({comment}) => {
    const [user, setUser] = useState({})
    const { author, body, votes, created_at } = comment
    const postedAt = new Date(created_at)

    useEffect(() => {
        getUserDetails(author)
        .then((user) => {
            setUser(user)
        })
    }, [])

    return (
        <div className="comment-card">
            <img className='avatar' src={user.avatar_url} alt="user avatar" />
            <p className='posted-details'>{author}, {postedAt.toLocaleString()}</p>
            <p className='comment-body'>{body}</p>
            <button className='upvote'>Votes: {votes}</button>
        </div>
    )
}

export default CommentCard