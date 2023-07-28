import React from 'react'
import { MenuList } from "../accessFiles/MenuList"
import MenuItems from "../components/MenuItems"
import "../styles/menu.css"


const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {
          MenuList.map((menuItems, key) => {
            return(
              <MenuItems
              key={key}
              image={menuItems.image}
              name={menuItems.name }
              price={menuItems.price} 
              />

            )
          })
        }
      </div>
      
    </div>
  )
}

export default Menu
