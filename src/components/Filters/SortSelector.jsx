import { FilterContext } from '../../contexts/FilterContext'
import './SortSelector.css'
import { useContext } from 'react'

const SortSelector = ({sortOptions, type}) => {

    const { artSort, comSort } = useContext(FilterContext)
    const [articleSort, setArticleSort] = artSort
    const [commentSort, setCommentSort] = comSort

    const handleChange = (event) => {
        const index = event.target.options.selectedIndex
        const sort_by = event.target.options[index].getAttribute('sort_by')
        const order = event.target.options[index].getAttribute('order')
        if (type === 'articles') {
            setArticleSort({ sort_by, order  })
        } else if (type === 'comments') {
            setCommentSort({ sort_by, order })
        }
    }

    return (
        <div className='sort'>
            <h3>Filters</h3>
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