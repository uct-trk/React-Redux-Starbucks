import React from 'react'
import './findAStore.css'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {Link} from 'react-router-dom'

const FindAStore = () => {
    return (
        <Link className="findAStore">
            <LocationOnIcon/>
            <h5>Find a store</h5>
        </Link>
    )
}

export default FindAStore
