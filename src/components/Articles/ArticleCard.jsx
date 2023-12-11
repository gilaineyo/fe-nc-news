import './ArticleCard.css'
import { getArticles } from '../../utils/utils'

const ArticleCard = ({articles}) => {
    return (
        <div className='article-card'>
            <ul>
            {articles.map((article) => {
                const { author, title, article_id, article_img_url, comment_count, votes, topic, created_at } = article
                return (
                    <li className="card" key={article_id}>
                        <img src={article_img_url} alt="article image" />
                        <h4 className='title'>{title}</h4>
                        <p className='author'>{author}</p>
                        <p className='topic'>Topic: {topic}</p>
                        <p className='votes'>Votes: {votes}</p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default ArticleCard