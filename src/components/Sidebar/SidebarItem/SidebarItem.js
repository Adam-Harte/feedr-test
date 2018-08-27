import React from 'react';

const sidebarItems = (props) => {
   return (
      <li className="item" onClick={props.clicked}>
         <h2>{props.label}</h2>
         <p>
            { props.item.dietaries.map((dietary, index) => {
                  return (
                     <span className="dietary" key={dietary + index}>{dietary}</span>
                  )
               }) }
         </p>
      </li>
   );
};

export default sidebarItems;