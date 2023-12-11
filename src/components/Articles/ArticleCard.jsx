import './ArticleCard.css'
const ArticleCard = ({articles, setCurrArticle}) => {


    const handleSeeMore = (article_id) => {
        setCurrArticle(article_id)

    }
    
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
                        <button onClick={() => {handleSeeMore(article_id)}}>More</button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default ArticleCard