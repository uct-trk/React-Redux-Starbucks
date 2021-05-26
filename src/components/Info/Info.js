import React from 'react'
import { Link } from 'react-router-dom'
import './info.css'

const Info = ({
    title,
    info,
    link,
    path,
    image,
    background,
    color,
    className,
}) => {
    return (
        <div className="info" style={{color, background}}>
            <img src={image} className="info__image" alt={title} />
            <div className="info__text">
                <h4>{title}</h4>
                <h6>{info}</h6>
                <Link style={{color}} className={className} to={path}>
                    {link}
                </Link>
            </div>
        </div>
    )
}

export default Info
