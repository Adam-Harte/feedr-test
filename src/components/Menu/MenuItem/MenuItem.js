import React from 'react';

const menuItem = (props) => {
   return (
      <li className="item">
         <h2>{props.label}</h2>
         <p>
            { props.item.dietaries.map((dietary, index) => {
               return (
                  <span className="dietary" key={dietary + index}>{dietary}</span>
               )
            }) }
         </p>
         <button className="remove-item" onClick={props.clicked}>x</button>
      </li>
   );
};

export default menuItem;