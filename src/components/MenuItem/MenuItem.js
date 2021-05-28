import React from 'react'
import { Link } from 'react-router-dom'
import './menuItem.css'
import {Fade} from 'react-awesome-reveal'

const MenuItem = ({type, image}) => {
    return (
        <Fade>
        <Link className="menuItem">
            <img src={image} alt={type} className="menuItem__image"/>
            <h4 className="menuItem__type">{type}</h4>
        </Link>
        </Fade>
    )
}

export default MenuItem
