import React, {useState} from 'react';
import BottomFooter from '../BottomFooter'
import Accordion from '../Accordion'

const Third = (props) => {
  const [pricing, setPricing] = useState([
    {
      title: 'Offline',
      oldprice: '30,00',
      newprice: '36,60',
      percent: 6,      
      active: true,
    },
    {
      title: 'Store A',
      oldprice: '30,00',
      newprice: '36,60',
      percent: 12,      
      active: false,
    },
    {
      title: 'Store X',
      oldprice: '30,00',
      newprice: '36,60',
      percent: 12,
      active: false,
    },
    {
      title: 'Store X',
      oldprice: '30,00',
      newprice: '36,60',
      percent: 12,      
      active: false,
    },
  ])
  
  const handleChange = (index) => {
    const changedPrices = pricing.map((item, i) =>  { return {...item, active: i == index ? true: false} })   
    setPricing(changedPrices)
  }

  return (
    <div>
      <div className="container-fluid dimension-step">
        <div className="row">
          <div className="col d-flex flex-column">
            <span>Dimension</span>
            <div className="title">Pricing Category</div>
          </div>          
        </div>
        <div className="row">
          <div className="col">
            <Accordion items={pricing} onChange={handleChange} />
          </div>
        </div>
        <BottomFooter />
      </div>
    </div>
  )
}

export default Third
