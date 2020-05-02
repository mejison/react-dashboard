import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import BtnMain from '../buttons/BtnMain'
import { useDispatch } from 'react-redux'
import { setRuleData } from '../../actions/rule'


const RuleTitle = ({closeMe}) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(setRuleData('title', name))
		closeMe({success: true})
	}
  return (
    <form onSubmit={handleSubmit}>
    	<div className="form-group">
    		<label>Strategy name</label>
    		<TextField value={name} onChange={val => setName(val)} placeholder="Name your Strategy" />
    	</div>
    	<div className="d-flex justify-content-end">
    		<BtnMain title="Cancel" variant="link" onClick={closeMe} />
    		<BtnMain type="submit" title="Continue" variant="standart" disabled={!name} />
    	</div>
    </form>
  )
}

export default RuleTitle
