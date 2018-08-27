import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const menu = (props) => {
   return (
      <div className="col-8">
         <h2>Menu preview</h2>
         <ul className="menu-preview">
            { props.items.map((item, index) => {
               return (
                  <MenuItem key={item.id} label={item.name} item={item} clicked={props.click(index)} />
               );
            }) }
         </ul>
      </div>
   );
};

export default menu;