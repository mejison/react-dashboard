import React from 'react';
import * as icons from './icons'
import OldNewPrice from './OldNewPrice';

const Accordion = ({ items, onChange }) => {  
  const UpArrow = icons.UpArrow
  const DownArrow = icons.DownArrow

  const handleToggle = (index) => {
    onChange(index)
  }

  return (
    <div className="accordions">
      {
        items.map((item, index) => {
          return <div className={`accorion-item ${item.active ? 'active' : ''}`} key={index}>
                  <div className="accordion-head" onClick={() => {handleToggle(index)}}>
                    <span className="accordion-action">                
                      { item.active ? <UpArrow fill="#072C3B" className="up"/> : <DownArrow fill="#072C3B" className="down" /> }
                    </span>
                    <div className="label">
                      { item.title }
                      <span className="accordion-interest">+12%</span>            
                    </div>
                    <OldNewPrice oldPrice={item.oldprice} newPrice={item.newprice} />                    
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-body-left">
                      <div className="d-flex">
                        <div className="">
                        </div>
                        <div className="">
                            <OldNewPrice oldPrice={item.oldprice} newPrice={item.newprice} />        
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body-right">
                      graph
                    </div>
                  </div>
                </div>
        })
      }
    </div>
  );
};

export default Accordion;
