import React, { useState } from 'react'
import { connect } from 'react-redux'
import './rule_edit.scss'
import BtnMain from '../../components/buttons/BtnMain'
import Tabs from '../../components/Tabs'
import FirstStep from '../../components/RuleSteps/First'
import SecondStep from '../../components/RuleSteps/Second'
import ThirdStep from '../../components/RuleSteps/Third'

const ruleOptions = [
	{
		title: 'Rule Details',
	}, {
		title: 'Dimension',
	}, {
		title: 'Price setup',
	}
]

const RuleEdit = ({match: {params}, rule}) => {
	const [step, setStep] = useState(3)
  return (
    <div className="rule-page d-flex flex-column h-100 bg-white">
    	<div className="rule-header d-flex align-items-center">
    		<div className="container-fluid">
	    		<div className="row align-items-center">
	    			<div className="col text-left">
		    			<BtnMain title="Cancel" variant="outline-standart" />
		    		</div>
		    		<div className="flex-fill col-5">
		    			<Tabs options={ruleOptions} current={step} onClick={val => setStep(val)} />
		    		</div>
		    		<div className="col text-right">
		    			<BtnMain title="Continue" variant="standart" />
		    		</div>
	    		</div>
    		</div>
    	</div>
    	<div className="rule-content flex-fill pt-5">
    		{
    			(step => {
    				switch (step) {
    					case 1:
    						return <FirstStep />
  						case 2:
  							return <SecondStep />
							case 3:
								return <ThirdStep />
							default:
								return null
    				}
    			})(step)
    		}
    	</div>
    	<div className="rule-footer">
    	</div>
    </div>
  )
}

const mapStateToProps = ({rule}) => ({
	rule: rule.data,
})

export default connect(mapStateToProps)(RuleEdit)
