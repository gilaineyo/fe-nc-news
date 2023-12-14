import { useEffect, useState } from 'react'
import './Topics.css'
import { getTopics } from '../../utils/utils'
import TopicCard from './TopicCard'
import TopicFocus from './TopicFocus'
import {Routes, Route} from 'react-router-dom'
import Error from '../Errors/Error'

const Topics = ({isLoading, setIsLoading}) => {
    const [topics, setTopics] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((topics) => {
            setIsLoading(false)
            setTopics(topics)
        })
        .catch((err) => {
            setIsLoading(false)
            setErrorMsg(err)
        })
    }, [])

    if (errorMsg) return <Error errorMsg={errorMsg} />

    return (
        <div className='topics'>
            <h2>Topics</h2>
            { isLoading ? <h3>Loading</h3> : null }
            <Routes>
                <Route path='/' element={<TopicCard topics={topics} />} />
                {/* <Route path='/add-topic' element={<PostTopic />} /> */}
                <Route path='/:slug/*' element={<TopicFocus isLoading={isLoading} setIsLoading={setIsLoading} />} />
            </Routes>
            
        </div>
    ) 
}

export default Topics