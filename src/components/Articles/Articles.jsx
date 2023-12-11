import ArticleCard from './ArticleCard'
import './Articles.css'
import Filters from './Filters'
import PostArticle from './PostArticle'

const Articles = () => {
    return (
        <div className='articles'>
            <h2>Articles</h2>
            <Filters />
            <ArticleCard />
            <PostArticle />
        </div>
    )
}

export default Articles