import React from 'react';
import * as icons from './icons'
import OldNewPrice from './OldNewPrice'
import PercentCounter from './PercentCounter'
import PriceSlider from './PriceSlider'

const Accordion = ({ items, onChange }) => {  
  const UpArrow = icons.UpArrow
  const DownArrow = icons.DownArrow

  const handleToggle = (index) => {
    onChange(index)
  }

  const handleChangePercent = (value) => {
    
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
                      { ! item.active ? <span className="accordion-interest">{item.percent}%</span> : '' }
                    </div>
                    <OldNewPrice oldPrice={item.oldprice} newPrice={item.newprice} />                    
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-body-left">
                      <div className="d-flex range">
                        <div className="range-left">
                          <PercentCounter value={item.percent} onChange={handleChangePercent}/>
                        </div>
                        <div className="range-right">
                            <OldNewPrice oldPrice={item.oldprice} newPrice={item.newprice} />        
                        </div>
                      </div>
                      <div>
                        <PriceSlider from={-20} to={20} frequency={10} value={item.percent} />
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
