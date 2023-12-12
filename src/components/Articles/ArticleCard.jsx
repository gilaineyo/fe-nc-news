import './ArticleCard.css'
import {Link} from 'react-router-dom'

const ArticleCard = ({articles}) => {
    
    return (
        <div className='article-card'>
            <ul>
            {articles.map((article) => {
                const { author, title, article_id, article_img_url, comment_count, votes, topic } = article
                return (
                    <li className="card" key={article_id}>
                        <img src={article_img_url} alt="article image" />
                        <h4 className='title'>{title}</h4>
                        <p className='author'>{author}</p>
                        <p className='topic'>Topic: {topic}</p>
                        <p className='votes'>Votes: {votes}</p>
                        <p className='comment-count'>Comments: {comment_count}</p>
                        <Link className="link" to={`/articles/${article_id}`}>
                            <button className='more'>More</button>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default ArticleCard