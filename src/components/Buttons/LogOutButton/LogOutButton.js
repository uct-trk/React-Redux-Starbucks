import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase'
import { logout } from '../../../redux/userSlice'
import './logOutButton.css'


const LogOutButton = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    // when we want to logout from account
    const logoutOfApp = () => {
        auth.signOut()
        .then(() => {
            dispatch(logout())
            history.replace("/")
        })
        .catch((error) => alert(error.message))
    }
    
    return (
        <button className="logoutButton" onClick={logoutOfApp}>
            Log Out
        </button>
    )
}

export default LogOutButton
