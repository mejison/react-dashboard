import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import CardDescription from '../CardDescription'
import DatePicker from '../inputs/DatePicker'

const First = () => {
	const [dates, setDate] = useState({start: new Date(), end: new Date()})
	const handleChangeDate = key => date => {
    console.log(key, date)
		setDate({...dates, [key]: date})
	}
  console.log(dates)
  return (
    <div className="container-fluid">
			<div className="row justify-content-center">
    		<div className="col">
    		</div>
    		<div className="col-5">
    			<div className="title pb-3">Strategy name</div>
				</div>
				<div className="col"></div>
			</div>
    	<div className="row justify-content-center">
    		<div className="col">
    		</div>
    		<div className="col-5">
    			<div className="form-group">
    				<TextField />
    			</div>
    			<div className="title">Time frame</div>
    			<div className="d-flex">
	    			<div className="form-group w-100 mr-3">
	    				<div>Start date</div>
	    				<DatePicker
                onChange={handleChangeDate('start')}
                selected={dates.start}
                z-placeholder="Start date"
              />
	    			</div>
	    			<div className="form-group w-100">
	    				<div>End date</div>
	    				<DatePicker
                onChange={handleChangeDate('end')}
                selected={dates.end}
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
