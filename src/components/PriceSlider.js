import React, {useState} from "react"

const PriceSlider = ({ from, to, frequency, onChange, value }) => {          
  let points = [];
  for(let item = from; item <= to; item += frequency) {
    points = [...points, item]
  }

  const calcCurrent = (value) => {
    let percentRight = (value / to * 100)
    let percentLeft = (value / from * 100)
    
    return value > 0 ? (percentRight / 2) + 50 : 50 - (percentLeft / 2)
  }

  const calcFill = (value) => {
    let percentRight = (value / to * 100)
    let percentLeft = (value / from * 100)
    
    return value > 0 ? (percentRight / 2) : (percentLeft / 2)
  }

  return (
    <div className="price-slider">
      <div className="slider">
        <span className="current" style={{left: `${calcCurrent(value)}%`}}></span>
        <span className="fill-current" style={{ width: `${calcFill(value)}%`, left: value > 0 ? '50%' : `${50 - calcFill(value)}%` }}></span>
        {
          points.map(item => {
            return <div className="point" key={item}>
                      {item > 0 ? '+' : ''} { item }
                    </div>
          })
        }        
      </div>
    </div>
  );
};

export default PriceSlider;