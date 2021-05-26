import React from 'react'
import { Link } from 'react-router-dom'
import './signUpButton.css'

const SignUpButton = () => {
    return (
        <Link className="signUpButton" to="/account/signup">
            Join now
        </Link>
    )
}

export default SignUpButton

