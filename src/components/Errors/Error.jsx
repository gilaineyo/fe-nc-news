import './Error.css'

const Error = ({errorMsg}) => {

    return (
        <div className='error'>
            <h3>Error!</h3>
            <p>{errorMsg}</p>
        </div>
    ) 
}

export default Error