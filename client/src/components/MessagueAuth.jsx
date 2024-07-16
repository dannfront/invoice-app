import { Link } from "react-router-dom"

function MessagueAuth({children, type}) {
    return (
        <p className='text-center'>

            {children} <Link to={`/${type.toLowerCase()}`} className="text-color-4">{type}</Link>
        </p>
    )
}

export default MessagueAuth
