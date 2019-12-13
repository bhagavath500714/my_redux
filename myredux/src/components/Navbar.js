import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="home" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><Link to="/" href="/">Home</Link></li>
                    <li><Link to="/about" href="/about">About</Link></li>
                    <li><Link to="/caonatct" href="/contact">Contact</Link></li>
                </ul>
                {/* Use navLink active call added default but notin Link */}
            </div>
        </nav>
    )
}

export default Navbar