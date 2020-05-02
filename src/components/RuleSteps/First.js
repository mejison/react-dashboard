import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import CardDescription from '../CardDescription'
import DatePicker from '../inputs/DatePicker'

const First = (props) => {
	const [date, setDate] = useState({start: new Date(), end: new Date()})
	const handleChangeDate = key => date => {
		setDate({...date, [key]: date})
	}
  return (
    <div className="container-fluid">
    	<div className="row justify-content-center">
    		<div className="col">
    		</div>
    		<div className="col-5">
    			<div>Strategy name</div>
    			<div className="form-group">
    				
    				<TextField />
    			</div>
    			<div>Time frame</div>
    			<div>
	    			<div className="form-group">
	    				<label>Start date</label>
	    				<DatePicker
                onChange={handleChangeDate('start')}
                selected={date.start}
                z-placeholder="Start date"
              />
	    			</div>
	    			<div className="form-group">
	    				<label>End date</label>
	    				<DatePicker
                onChange={handleChangeDate('end')}
                selected={date.end}
                z-placeholder="End date"
              />
	    			</div>
    			</div>
    		</div>
    		<div className="col">
    			<div className="mb-3">
    				<CardDescription
    					title="Use key words to name the rule"
    					content="In order to make your rules easily understanable, use keywords such as X, Y, Z, eg." />
  				</div>
  				<div className="mb-3">
    				<CardDescription
    					title="The time frame shouldn be between 2 - 6 months"
    					content="This will allow you to analyze the results more precisely" />
  				</div>
    		</div>
    	</div>
    </div>
  )
}

export default First
