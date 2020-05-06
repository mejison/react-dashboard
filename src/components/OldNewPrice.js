import React from 'react';

const OldNewPrice = ({oldPrice, newPrice}) => {  
  return (
    <div className="short-price">
      <div className="price old">
        <div className="accorion-title">
          Old Price
        </div>
        <div>
          { oldPrice } €
        </div>                
      </div>
      
      <div className="price new">
        <div className="accorion-title">
          New Price
        </div>
        <div>
          { newPrice } €
        </div> 
      </div>
    </div>
  );
};

export default OldNewPrice;
