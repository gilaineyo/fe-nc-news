import './PostComment.css'
import { UserContext } from '../../../../contexts/UserContext'
import { useContext, useState } from 'react'
import { getUser, postCommentToArticle } from '../../../../utils/utils'

const PostComment = ({article_id, comments, setComments}) => {
    const { user, setUser } = useContext(UserContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [commentInput, setCommentInput] = useState('')
    const [isLoginError, setIsLoginError] = useState(false)
    const [isCommentError, setIsCommentError] = useState(false)
    const [isPosting, setIsPosting] = useState(false)

    const handleLoginChange = (event) => {
        setUsernameInput(event.target.value)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        getUser(usernameInput)
        .then((user) => {
            setUser(user)
            setIsLoginError(false)
            setIsCommentError(false)
        })
        .catch(() => {
            setIsCommentError(false)
            setIsLoginError(true)
        })
        setUsernameInput('')
    }

    const handleCommentChange = (event) => {
        setCommentInput(event.target.value)
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault()
        setIsPosting(true)
        const comment = { username: user.username, body: commentInput }
        postCommentToArticle(article_id, comment)
        .then((newComment) => {
            setIsCommentError(false)
            setIsPosting(false)
            setComments([newComment, ...comments])  
        })
        .catch(() => {
            setIsPosting(false)
            setIsCommentError(true)
        })
        setCommentInput('')
    }


    return (
        <div className='post-comment'>
            <h3>Post a comment</h3>
                {user.username ? <p>Logged in as {user.username}</p> : 
                <form className='login-form' onSubmit={handleLoginSubmit}>
                    <label>Enter username: 
                        <input type="text" name="username" value={usernameInput} onChange={handleLoginChange} />
                        <button disabled={!usernameInput}>Log in</button>
                    </label>
                </form>}
            <form className="comment-form" onSubmit={handleCommentSubmit}>
                <label>Comment: 
                    <input type="text" name="body" value={commentInput} onChange={handleCommentChange} />
                </label>
                <button disabled={!commentInput}>Submit</button>
            </form>
            <div className='messages'>
                { isLoginError ? <p>Uh-oh... something went wrong! Check you're logged in as a valid user!</p> : null } 
                { isPosting ? <p>Posting your comment...</p> : null }
                { isCommentError && user.username ? <p>Sorry, your comment could not be posted, try again later.</p> : null }
                { isCommentError && !user.username ? <p>You need to log in to post a comment!</p> : null}
            </div>
        </div>
    )
}

export default PostComment