import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className="nav container">
                <Link to='/'><h3>Home</h3></Link>
                <div className='nav-items'>
                    <li className="nav-item">
                        <Link to='/todo'><p>Todo lista</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/mock'><p>mOcK gEnErAtOr</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dmg'><p>Valheim dmg calc</p></Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar