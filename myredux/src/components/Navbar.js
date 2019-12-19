import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="home" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><Link to="/" href="/">Home</Link></li>
                    <li><Link to="/about" href="/about">About</Link></li>
                    <li><NavLink to="/contact" href="/contact">Contact</NavLink></li>
                </ul>
                {/* Use navLink active call added default but notin Link */}
            </div>
        </nav>
    )
}

export default withRouter(Navbar)