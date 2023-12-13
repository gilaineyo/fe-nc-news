import './TopicCard.css'

const TopicCard = ({topic}) => {
    return (
        <div className='topic-card'>
            <h3>{topic.description}</h3>
        </div>
    )
}

export default TopicCard