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
                        <h4>{title}</h4>
                        <p>{author}</p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default ArticleCard