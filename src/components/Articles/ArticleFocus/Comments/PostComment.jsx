import './PostComment.css'

const PostComment = ({article_id}) => {
    return (
        <div className='post-comment'>
            <h3>Post a comment</h3>
            <form className='comment-form'>
                <input type="textarea" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostComment