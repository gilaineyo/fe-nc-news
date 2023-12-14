import { FilterContext } from '../../contexts/FilterContext'
import './SortSelector.css'
import { useContext, useState, useEffect } from 'react'

const SortSelector = ({type, topic}) => {
    const { artSort, comSort } = useContext(FilterContext)
    const [articleSort, setArticleSort] = artSort
    const [commentSort, setCommentSort] = comSort
    const [sortOptions, setSortOptions] = useState([])

    useEffect(() => {

        if (type === 'articles' || type === 'topic') {
            setSortOptions([
                { text: "Date (newest first)", sort_by: 'created_at', order: 'desc' }, 
                { text: "Date (oldest first)", sort_by: 'created_at', order: 'asc' }, 
                { text: "Comments (most first)", sort_by: 'comment_count', order: 'desc' }, 
                { text: "Comments (fewest first)", sort_by: 'comment_count', order: 'asc' }, 
                { text: "Votes (most first)", sort_by: 'votes', order: 'desc' }, 
                { text: "Votes (fewest first)", sort_by: 'votes', order: 'asc'}
                ])
            }
    }, [])

    const handleChange = (event) => {
        const index = event.target.options.selectedIndex
        const sort_by = event.target.options[index].getAttribute('sort_by')
        const order = event.target.options[index].getAttribute('order')
        
        if (type === 'articles') {
            setArticleSort({ sort_by, order })
        } else if (type === 'topic') {
            setArticleSort({ topic, sort_by, order })
        } else if (type === 'comments') {
            setCommentSort({ sort_by, order })
        }
    }

    return (
        <div className='sort'>
            <label>Sort by: 
                <select onChange={handleChange}>
                    {sortOptions.map((sortOption) => {
                        const { text, sort_by, order } = sortOption
                        return <option key={text} sort_by={sort_by} order={order}>{text}</option>
                    })}
                </select>
            </label>
        </div>
    )
}

export default SortSelector