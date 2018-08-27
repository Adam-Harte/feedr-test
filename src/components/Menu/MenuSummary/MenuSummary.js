import React from 'react';

const menuSummary = (props) => {
   return (
      <div className="col-6 menu-summary-left">
         <span>{props.itemsCount} items</span>
      </div>
      <div className="col-6 menu-summary-right">
         6x <span className="dietary">ve</span>
         4x <span className="dietary">v</span>
         12x <span className="dietary">n!</span>
      </div>
   );
};

export default menuSummary;