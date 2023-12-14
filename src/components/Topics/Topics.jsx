import { useEffect, useState } from 'react'
import './Topics.css'
import { getTopics } from '../../utils/utils'
import TopicCard from './TopicCard'
import TopicFocus from './TopicFocus'
import {Routes, Route} from 'react-router-dom'

const Topics = () => {
    const [isLoading, setIsLoading] = useState(false)
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
            <Routes>
                <Route path='/' element={<TopicCard topics={topics} />} />
                <Route path='/:slug/*' element={<TopicFocus />} />
            </Routes>
            
        </div>
    ) 
}

export default Topics