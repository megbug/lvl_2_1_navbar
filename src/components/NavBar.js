import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/drinks'>Drinks</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/openings'>Openings</Link>
            <Link to='/gallery'>Gallery</Link>
        </nav>
    );
}

export default NavBar;