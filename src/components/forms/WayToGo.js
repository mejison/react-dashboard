import React, { useState } from 'react'
import TextField from '../inputs/TextField'
import BtnMain from '../buttons/BtnMain'
import { useDispatch } from 'react-redux'
import { setRuleData } from '../../actions/rule'
import NoImage from '../../assets/images/no-image.png'

const WayToGo = ({closeMe}) => {

  return (
    <form>
      <h2 className="d-flex justify-content-center way-to-go-title">Way to go!</h2>
    	<div className="form-group align-items-center d-flex flex-column">    		
    		<p>You’ve create your first rule. Time to add more rules and fully optimize all your prices.</p>
        <p>More rules = Higher Revenue</p>
        <div className="no-image my-3">
          <img src={NoImage} className="image-fluid" />
        </div>
    	</div>
    	<div className="d-flex justify-content-center">
    		<BtnMain title="No, I’ll do it later" variant="link" onClick={closeMe} />
    		<BtnMain type="submit" title="Add another rule" variant="standart" />
    	</div>
    </form>
  )
}

export default WayToGo
