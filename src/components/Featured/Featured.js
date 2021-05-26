import React from 'react'
import { Link } from 'react-router-dom'
import './featured.css'

const Featured = ({
    title,
    info,
    link,
    path,
    image,
    background,
    color,
    className,
    order
}) => {
    return (
        <div className="featured" style={{background}}>
            <div className="featured__left" style={{order,color}}>
                <img src={image} alt={title}/>
            </div>
            <div className="featured__right">
            <h1>{title}</h1>
            <h4>{info}</h4>
            <Link to={path} className={className}>
                {link}
            </Link>
            </div>
        </div>
    )
}

export default Featured
