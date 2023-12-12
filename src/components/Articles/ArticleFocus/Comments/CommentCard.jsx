const CommentCard = ({comment}) => {
    const { author, body, comment_id, votes, created_at } = comment
    return (
        <div className="comment-card">
            <p>Here's a comment</p>
        </div>
    )
}

export default CommentCard