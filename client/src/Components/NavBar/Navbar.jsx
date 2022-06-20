import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className="logo">HotelBookingApp</span>
                <div className="navItem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Sign in</button>

                </div>
            </div>
        </div>
    )
}
