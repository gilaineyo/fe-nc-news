import './Navigation.css'
import {Link} from 'react-router-dom'
import { Button, ButtonGroup } from '@mui/material'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ButtonGroup color="secondary" aria-label="navigation buttons">
                <Link to="/"><Button variant='contained'>Home</Button></Link>
                <Link to="/articles"><Button variant='contained'>Articles</Button></Link>
                <Link to="/topics"><Button variant='contained'>Topics</Button></Link>
            </ButtonGroup>
        </nav>
    )
}

export default Navigation

