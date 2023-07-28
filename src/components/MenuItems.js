import React from 'react'

const MenuItems = ({image, name, price}) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}>
        <div className='namep'>
          <h1>{name}</h1>
          <p>Ghc{price}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItems
