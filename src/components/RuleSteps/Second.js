import React, { useState, useRef } from 'react';
import BottomFooter from '../BottomFooter'
import CardDescription from '../CardDescription'
import DimensionSelect from '../DimensionSelect'

const Second = (props) => {
  const [items, setItems] = useState([{title: 'Point of sale', score: 8, active: true}, {title: 'Pricing Category', score: 3}])

  const handleClick = (value) => {
    const filteredItems = items.map((item, index) => index == value ? {...item, active: true} : {...item, active: false})
    setItems(filteredItems)
  }

  return (
    <div>
      <div className="container-fluid dimension-step">
        <div className="row justify-content-center">
          <div className="col"></div>
          <div className="col-5">
            <div className="title">Select a dimension</div>
          </div>
          <div className="col"></div>
        </div>
    	  <div className="row justify-content-center">
          <div className="col"></div>
          <div className="col-5">            
            <DimensionSelect items={items} onClick={handleClick}/>
          </div>
          <div className="col">
            <CardDescription
              title="Use key words to name the rule"
              content="In order to make your rules easily understanable, use keywords such as X, Y, Z, eg." />
          </div>          
        </div>
      </div>
      <BottomFooter />
    </div>
  )
}

export default Second
