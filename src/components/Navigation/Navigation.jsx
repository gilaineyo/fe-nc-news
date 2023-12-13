import './Navigation.css'
import {Routes, Route, Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
        </nav>
    )
}

export default Navigation