import './PostComment.css'
import { UserContext } from '../../../../contexts/UserContext'
import { useContext, useState } from 'react'
import { getUser, postCommentToArticle } from '../../../../utils/utils'

const PostComment = ({article_id, comments, setComments}) => {
    const { user, setUser } = useContext(UserContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [commentInput, setCommentInput] = useState('')
    const [isError, setIsError] = useState(false)

    const handleLoginChange = (event) => {
        setUsernameInput(event.target.value)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        getUser(usernameInput)
        .then((user) => {
            setUser(user)
            setIsError(false)
        })
        .catch(() => {
            setIsError(true)
        })
        setUsernameInput('')
    }

    const handleCommentChange = (event) => {
        setCommentInput(event.target.value)
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault()
        const comment = { username: user.username, body: commentInput }
        postCommentToArticle(article_id, comment)
        .then((newComment) => {
          setComments([newComment, ...comments])  
        })
        .catch(() => {
            setIsError(true)
        })
        setCommentInput('')
    }

    return (
        <div className='post-comment'>
            <h3>Post a comment</h3>
                {user.username ? <p>Logged in as {user.username}</p> : 
                <form className='login-form' onSubmit={handleLoginSubmit}>
                    <label>{ isError ? "Not a valid user!" : "Not logged in!" } Enter username: 
                        <input type="text" name="username" value={usernameInput} onChange={handleLoginChange} />
                        <button>Log in</button>
                    </label>
                </form>}
            <form className="comment-form" onSubmit={handleCommentSubmit}>
                <label>Comment: 
                    <input type="text" name="body" value={commentInput} onChange={handleCommentChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostComment