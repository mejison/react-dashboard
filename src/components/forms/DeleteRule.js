import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import BtnMain from '../buttons/BtnMain'
import { useDispatch } from 'react-redux'
import { setRuleData } from '../../actions/rule'


const ReleteRule = ({closeMe}) => {
  return (
    <form>
    	<div className="form-group">
    		<label>You won’t be able to restore it. </label>    		
    	</div>
    	<div className="d-flex justify-content-end">
    		<BtnMain title="No, keep it" variant="link" onClick={closeMe} />
    		<BtnMain type="submit" title="Yes, delete" variant="danger" />
    	</div>
    </form>
  )
}

export default ReleteRule
