import './TopicCard.css'
import {Link} from 'react-router-dom'

const TopicCard = ({topics}) => {
    return (
        <div className='topic-card'>
            <ul>
                {topics.map((topic) => {
                    const {slug, description} = topic
                    return (
                        <li className='card' key={slug}>
                            <h3>{description}</h3>
                            <Link className='link' to={`/topics/${slug}`}>
                                <button className='topic-button'>See {slug} articles</button>
                            </Link>
                        </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default TopicCard