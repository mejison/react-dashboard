import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import BtnMain from '../buttons/BtnMain'
import { useDispatch } from 'react-redux'
import { setRuleData } from '../../actions/rule'


const Leave = ({closeMe}) => {
  return (
    <form>
    	<div className="form-group">
    		<label>You won’t be able to restore it. </label>    		
    	</div>
    	<div className="d-flex justify-content-end">
    		<BtnMain title="No, stay here" variant="link" onClick={closeMe} />
    		<BtnMain type="submit" title="Yes, leave" variant="standart"  />
    	</div>
    </form>
  )
}

export default Leave
