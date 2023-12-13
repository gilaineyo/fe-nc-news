import { FilterContext } from '../../contexts/FilterContext'
import './SortSelector.css'
import { useContext } from 'react'

const SortSelector = () => {

    const { sortOptions } = useContext(FilterContext)

    return (
        <div className='sort'>
            <h3>Filters</h3>
            <label>Sort by: 
                <select>
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