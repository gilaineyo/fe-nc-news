import './Header.css'
import Navigation from '../Navigation/Navigation'
import {UserContext} from '../../contexts/UserContext'
import { useContext } from 'react'
import { Avatar } from '@mui/material'

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className='header'>
            <h1>Gilaine's news</h1>
            { user.username 
            ? <div className='user-info'>
                <Avatar src={user.avatar_url} alt={user.name} />
                <p>{user.username} logged in</p>
            </div>
            : <div className='user-info'>
                <p className='login'>Log in</p>
            </div> }
            <Navigation />
        </div>
    )
}

export default Header