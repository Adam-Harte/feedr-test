import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';

const sidebar = (props) => {
   return (
      <div className="col-4">
         <ul className="item-picker">
            { props.items.map((item, index) => {
               return (
                  <SidebarItem key={item.id} label={item.name} item={item} clicked={props.click(index)} />
               );
            }) }
         </ul>
      </div>
   );
};

export default sidebar;