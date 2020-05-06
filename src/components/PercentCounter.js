import React, {useState} from "react"
import * as icons from './icons'

const PercentCounter = ({ value, onChange }) => {          
  const [current, setCurrent] = useState(value)

  const UpArrow = icons.UpArrow
  const DownArrow = icons.DownArrow

  const handleClickUp = () => {
    setCurrent(current + 1)
  }

  const handleClickDown = () => {
    setCurrent(current - 1)
  }

  const handleChange = () => {
    onChange(current)
  }

  return (
    <div className="percent-counter">
      <div className="input-wrap">
        <input value={`${current > 0 ? '+' : ''}${current}%`} onChange={handleChange} />
      </div>
      <div className="action">
        <div className="arrow-up" onClick={handleClickUp}>
          <UpArrow fill="#072C3B" />
        </div>
        <div className="arrow-down" onClick={handleClickDown}>
          <DownArrow fill="#072C3B" />
        </div>
      </div>
    </div>
  );
};

export default PercentCounter;