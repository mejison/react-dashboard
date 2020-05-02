import React from 'react'
import { connect } from 'react-redux'
import NoImage from '../../assets/images/no-image.png'
import BtnMain from '../buttons/BtnMain'
import { toggleModal } from '../../actions/ui'
import RuleTitle from '../forms/RuleTitle'
import './rule_list.scss'
import { history } from '../../store'

const RuleList = ({dispatch, rules}) => {
	console.log(rules)
	const handleAddRule = () => {
		dispatch(toggleModal(true, 'Create strategy', <RuleTitle />, 'modal-sm')).then(({success}) => {
			if (success) {
				history.push('/rule/create')
			}
		})
	}
  return (
    <div className="rule-list-container">
    	{
    		rules.length
    			? null
    			: <div className="empty">
    					<div className="title text-center">No Rules Defined</div>
    					<div className="text-center font-lato mb-3">Simulate and optimize your prices by creating rules in just 3 steps.</div>
    					<div className="no-image mb-3">
    						<img src={NoImage} className="image-fluid" />
  						</div>
  						<div className="font-lato steps">
  							<div className="d-flex align-items-center mb-3">
  								<div className="mr-3">
  									<div className="step">1</div>
									</div>
  								<div>Select the time frame</div>
  							</div>
  							<div className="d-flex align-items-center mb-3">
  								<div className="mr-3"><div className="step">2</div></div>
  								<div>Specify your objectives</div>
  							</div>
  							<div className="d-flex align-items-center mb-3">
  								<div className="mr-3"><div className="step">3</div></div>
  								<div>Reach your goals and grow your business</div>
  							</div>
  						</div>
  						<div>
  							<BtnMain title="Add first rule" className="btn-block" iconLeft="PlusIcon" onClick={handleAddRule} />
  						</div>
    				</div>
    	}
    </div>
  )
}

const mapStateToProps = ({app}) => ({
	rules: app.rules
})

export default connect(mapStateToProps)(RuleList)
