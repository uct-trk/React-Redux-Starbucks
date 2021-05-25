import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../../redux/userSlice'
import LogOutButton from '../Buttons/LogOutButton/LogOutButton'
import SignInButton from '../Buttons/SignInButton/SignInButton'
import SignUpButton from '../Buttons/SignUpButton/SignUpButton'
import FindAStore from '../FindAStore/FindAStore'
import { Example } from './FramerNavMenu/Example'
import './header.css'

const Header = ({menuPage}) => {

    // stateyi aldık
    const user = useSelector(selectUser)

    return (
        <div className={`header ${menuPage && 'header__menuPage'}`}>
            <div className="header__left">
                <Link to="/" className="header__logo">
                    <img src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png" alt="logo" />
                </Link>
                <Link to="/menu" className="header__link">
                    MENU
                </Link>
                <Link className="header__link">
                    REWARDS
                </Link>
                <Link className="header__link">
                    GIFT CARDS
                </Link>
            </div>
            <div className="header__right">
                <Example/>
                <FindAStore/>
                {/*USER HERE */}
                {!user ? (
                    <>
                    <Link to="/account/signin">
                        <SignInButton/>
                    </Link>
                    <Link to="/account/signup">
                        <SignUpButton/>
                    </Link>
                    </>
                ) : (
                    <div className="header__logout">
                        {menuPage ? <LogOutButton/> : <Link to="/menu">Order Now</Link>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
