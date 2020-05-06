import React from 'react';
import * as icons from './icons';

const OldNewPrice = ({oldPrice, newPrice}) => {  
  const ArrowRightIcon = icons.ArrowRightIcon

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
      
      <div className="separator">
        <ArrowRightIcon fill="#072C3B" />
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
