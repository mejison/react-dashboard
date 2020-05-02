import React from 'react'
import PrivateLayout from '../layouts/Private'
import { Route } from 'react-router-dom'

const RuleRoute = ({component: Component, ...rest}) => {
	const render = props => {
		return (
			<div className="rule-layout">
				<Component {...props} />
			</div>
		)
	}
	return (
		<Route {...rest} render={render} />
	)
}

export default RuleRoute
