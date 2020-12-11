import { Link } from 'react-router-dom'

function Nav() {
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/procedures'>Procedures</Link>
            </li>
        </ul>
    )
}

export default Nav