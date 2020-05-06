import React from 'react';
import * as icons from './icons'
import OldNewPrice from './OldNewPrice'
import PercentCounter from './PercentCounter'
import PriceSlider from './PriceSlider'
import DemandChart from './DemandChart';

const Accordion = ({ items, onChange }) => {  
  const UpArrow = icons.UpArrow
  const DownArrow = icons.DownArrow

  const handleToggle = (index) => {
    onChange(index)
  }

  const graphData = [
    {},
    {
      name: 'ATP', ATP_UP: 50, ATP: 450,
    },    
    {},
    {
      name: 'Demand', Demand_UP: 50, Demand: 340,
    },
    {},
    {},
    {
      name: 'ATP', ATP_UP: 0, ATP: 400,
    },
    {},
    {
      name: 'Demand', Demand_UP: 0, Demand: 580,
    },
    {},
  ]

  const handleChangePercent = (value) => {}

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
                    {
                      ! item.active ?
                      <OldNewPrice oldPrice={item.oldprice} newPrice={item.newprice} />                    
                      : ''
                    }
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-body-left">
                      <div className="d-flex range">
                        <div className="range-left">
                          <PercentCounter 
                            value={item.percent} 
                            onChange={handleChangePercent}
                          />
                        </div>
                        <div className="range-right">
                          <OldNewPrice 
                            oldPrice={item.oldprice}
                            newPrice={item.newprice}
                          />
                        </div>
                      </div>
                      <div>
                        <PriceSlider 
                          from={-20} 
                          to={20}
                          frequency={10} 
                          value={item.percent}
                        />
                      </div>
                    </div>
                    <div className="accordion-body-right">
                      <DemandChart data={graphData} />
                    </div>
                  </div>
                </div>
        })
      }
    </div>
  );
};

export default Accordion;
