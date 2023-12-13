import { useEffect, useState } from 'react'
import './Topics.css'
import { getTopics } from '../../utils/utils'
import TopicCard from './TopicCard'

const Topics = ({isLoading, setIsLoading}) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((topics) => {
            setIsLoading(false)
            setTopics(topics)
        })
    }, [])

    return (
        <div className='topics'>
            <h2>Topics</h2>
            { isLoading ? <h3>Loading</h3> : null }
            {topics.map((topic) => {
                return <TopicCard key={topic.slug} topic={topic} />
            })}
        </div>
    ) 
}

export default Topics