import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/' style={{
                    color: 'inherit',
                    textDecoration: "none",
                    fontSize: "21px"
                }} >
                    <span className="logo">HotelBookingApp</span>
                </Link>
                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Sign in</button>

                </div>
            </div>
        </div>
    )
}
