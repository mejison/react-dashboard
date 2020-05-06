import React, {useState} from 'react';
import Tooltip from './Tooltip';

const DimensionSelect = ({ items, onClick }) => {    
  const [isShowTooltip, setIsShowTooltip] = useState([...items.map(i => false)])

  const handleClick = (index) => {
    onClick(index)
  }

  const handleMove = (index) => {    
    const selectedIsShowTooltip = isShowTooltip.map((item, i) => i == index ? true : false)    
    setIsShowTooltip(selectedIsShowTooltip)
  }

  const handleLeave = () => {
    setIsShowTooltip([...items.map(i => false)])
  }

  const tooltipDescription = `
    Subdimensions: 6 </br>
    Subdimension with a long title 1 </br>
    Subdimension 2 </br>
    Subdimension 3 </br>
    Subdimension 4 </br>
    Subdimension 5 </br>
    Subdimension 6 </br>
  `
  
  return (
    <div className="dimension-select">     
      {
        items.map((item, i) =>  {
          return  <div onClick={() => {handleClick(i)}} className={`option ${item.active ? 'active' : ''}`}  key={i}>
                    <div className="label">
                      { item.title }
                    </div>
                    <div className="price position-relative" onMouseMove={() => handleMove(i)} onMouseLeave={handleLeave}>
                        <Tooltip content={tooltipDescription} show={isShowTooltip[i]} />
                      { item.score }
                    </div>
                  </div>
        })
      } 
    </div>
  );
};

export default DimensionSelect;
