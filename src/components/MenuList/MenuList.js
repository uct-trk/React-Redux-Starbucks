import React from 'react'
import './menuList.css'
import menuList from './../../menuList.json'
import { Link } from 'react-router-dom'
const MenuList = () => {
    return (
        <div className="menuList">
            <div className="menuList__container">
                <h4>Drinks</h4>
                <div className="menuList__items">
                    {menuList.map((menuListCategory) => menuListCategory.drinks.map((menuListItemDrink) => (
                        <Link>{menuListItemDrink.type}</Link>
                    )))}
                </div>
            </div>

            <div className="menuList__container">
                <h4>Food</h4>
                <div className="menuList__items">
                    {menuList.map((menuListCategory) => menuListCategory.food.map((menuListItemFood) => (
                        <Link>{menuListItemFood.type}</Link>
                    )))}
                </div>
            </div>

            <div className="menuList__container">
                <h4>At Home Coffee</h4>
                <div className="menuList__items">
                    {menuList.map((menuListCategory) => menuListCategory.atHomeCoffee.map((menuListItemAtHome) => (
                        <Link>{menuListItemAtHome.type}</Link>
                    )))}
                </div>
            </div>

            <div className="menuList__container">
                <h4>Merchandise</h4>
                <div className="menuList__items">
                    {menuList.map((menuListCategory) => menuListCategory.merchandise.map((menuListItemMerchandise) => (
                        <Link>{menuListItemMerchandise.type}</Link>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default MenuList
