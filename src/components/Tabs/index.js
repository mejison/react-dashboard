import React from 'react'
import './tabs.scss'
import cn from 'classnames'
import { CheckIcon } from '../icons'

const Tabs = ({options, current, onClick}) => {
	const handleClick = step => () => {
		onClick(step)
	}
  return (
    <div className="tabs-container">
    	{
    		options.map((option, i) => {
    			const complete = current > i+1
    			const active = current === i+1
    			return (
    				<div key={i} className={cn('tab-item d-flex align-items-center px-2', {active})} onClick={handleClick(i+1)} style={{width: `${100 / options.length}%`}}>
    					<div className="mr-2">
    						<div className="step">{complete ? <CheckIcon /> : i+1}</div>
    					</div>
    					<div>{option.title}</div>
    				</div>
  				)
    		})
    	}
    </div>
  )
}

export default Tabs;