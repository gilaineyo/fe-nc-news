import { getUserDetails } from "../../../../utils/utils"
import { useEffect, useState, useContext } from "react"
import './CommentCard.css'
import { UserContext } from "../../../../contexts/UserContext"

const CommentCard = ({comment}) => {
    const [authorProfile, setAuthorProfile] = useState({})
    const {user} = useContext(UserContext)
    const { author, body, votes, created_at } = comment
    const postedAt = new Date(created_at)

    useEffect(() => {
        getUserDetails(author)
        .then((validUser) => {
            setAuthorProfile(validUser)
        })
    }, [])
    
    console.log(user, "<--- user")
    console.log(authorProfile, "<--- userProfile")

    return (
        <div className="comment-card">
            <img className='avatar' src={authorProfile.avatar_url} alt="user avatar" />
            <p className='posted-details'>{author}, {postedAt.toLocaleString()}</p>
            <p className='comment-body'>{body}</p>
            <button className='upvote'>Votes: {votes}</button>
            {authorProfile.username === user.username 
                ? <button className="delete">Delete</button> 
                : null}
        </div>
    )
}

export default CommentCard