import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './compStyle/compStyle.css'

const Nav = () => {
    const [Signin, setSignin] = useState(false);
    const [Signup, setSignup] = useState(false);

    const In = () => {
        return (
            <div className="popup-Signin">
                <div className="in-content">
                    <span className="cls"><ion-icon name="close-circle-outline" onClick={() => setSignin(false)} /></span>
                    <img src="./images/Login.png" className='img shdo' alt="" />
                    <input type="text" placeholder="Username" required />
                    <input type="Password" placeholder="password" />
                    <a href="/error" className="btn">Submit</a>
                </div>
            </div>
        )
    }

    const Up = () => {
        return (
            <div className="popup-Signup">
                <div className="up-content">
                    <span className="cls"><ion-icon name="close-circle-outline" onClick={() => setSignup(false)} /></span>
                    <img src="./images/up.png" className='img shdo' alt="" />
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="email" required />
                    <input type="Password" placeholder="password" required/>
                    <a href="/error" className="btn">Submit</a>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/"><img src="./images/logo.png" alt="" /></NavLink>
                </div>
                <div className="pages">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/about"> About Us </NavLink>
                    <NavLink to="/review"> Review </NavLink>
                    <NavLink to="/contact"> Contact Us</NavLink>
                </div>
                <div className="cont">
                    <NavLink><button className='btn' onClick={() => setSignin(true)}>Sign in</button></NavLink>
                    <NavLink><button className='btn' onClick={() => setSignup(true)}>Sign up</button></NavLink>
                    {/* <NavLink><button className='btn'>contact</button></NavLink> */}
                </div>
            </div>
            {Signin && <In />}
            {Signup && <Up />}
        </>
    )
}

export default Nav;