import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Signup from '../Modal/Signup'
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai'
import { logout } from '../../redux/slices/user.slice';
import './Navbar.css'

const Navbar = () => {
    const [mode, setMode] = useState(false)
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const { isLoggedIn, user } = useSelector((state) => {
        console.log(state.user)
        return state.user
    })
    return (
        <div className=' p-5 flex justify-between items-center'>
            <div className="nav-head font-semibold">
                <Link to='/'>CourseHub</Link>
            </div>
            <div className={`nav-list text-sm md:text-base gap-6   flex md:gap-8 md:items-center  ${active?"active":""}`}>
                <NavLink onClick={()=>setActive(false)} className="py-2 uppercase" to="/courses">Courses</NavLink>
                <NavLink onClick={()=>setActive(false)} className="py-2 uppercase" to='/dashboard'>Dashboard</NavLink>
                {!isLoggedIn ?
                    <button
                        onClick={() => setMode(true)}
                        className='px-8 py-3 text-xs rounded text-purple-700 bg-purple-200'>
                        Sign Up
                    </button> :
                    <button
                        className='flex items-center gap-1 text-red-500'
                        onClick={() => dispatch(logout())}>
                        <AiOutlineLogout />
                        Logout
                    </button>}
                <div
                    className='md:hidden absolute top-2 right-2 text-xl'
                    onClick={() => setActive(false)}>
                    <RxCross2/>
                </div>
            </div>
            <div className='block md:hidden' onClick={()=>setActive(true)}>
                <GiHamburgerMenu />
            </div>
            {/* modal for signup */}
            <Signup mode={mode} setMode={setMode} />

        </div>
    )
}

export default Navbar
