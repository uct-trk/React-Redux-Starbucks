import React from 'react'
import './menu.css'
import menuList from './../../menuList.json'
import MenuHeader from '../MenuHeader/MenuHeader'
import MenuList from '../MenuList/MenuList'
import MenuItem from '../MenuItem/MenuItem'
import { Footer } from '../Footer/Footer'
import Bottom from './../Bottom/Bottom'

const Menu = () => {
    return (
        <div className="menuScreen">
         <MenuHeader/>
         <div className="menuScreen__container">
             <div className="menuScreen__left">
                 <MenuList/>
             </div>
             <div className="menuScreen__right">
                 <h1>Menu</h1>

                 <div className="menuScreen__category">
                     <h2>Drinks</h2>
                     <div className="menuScreen__items">
                         {menuList.map((menuListCategory) => menuListCategory.drinks.map(({type, path, image}) => (
                             <MenuItem type={type} image={image}/>
                         )) )}
                     </div>
                 </div>

                 <div className="menuScreen__category">
                     <h2>Food</h2>
                     <div className="menuScreen__items">
                         {menuList.map((menuListCategory) => menuListCategory.food.map(({type, path, image}) => (
                             <MenuItem type={type} image={image}/>
                         )) )}
                     </div>
                 </div>

                 <div className="menuScreen__category">
                     <h2>At Home Coffee</h2>
                     <div className="menuScreen__items">
                         {menuList.map((menuListCategory) => menuListCategory.atHomeCoffee.map(({type, path, image}) => (
                             <MenuItem type={type} image={image}/>
                         )) )}
                     </div>
                 </div>

                 <div className="menuScreen__category">
                     <h2>Merchandise</h2>
                     <div className="menuScreen__items">
                         {menuList.map((menuListCategory) => menuListCategory.merchandise.map(({type, path, image}) => (
                             <MenuItem type={type} image={image}/>
                         )) )}
                     </div>
                 </div>
             </div>
         </div>
         <Footer/>
         <Bottom/>
        </div>
    )
}

export default Menu
