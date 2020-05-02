import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import { toggleModal, closeModal } from '../../actions/ui'
import cn from 'classnames'
import 'react-responsive-modal/styles.css'
import './modal.scss'

const CustomModal = ({dispatch, show, content, title, className, resolver}) => {
	const onCloseModal = (data = {}) => {
		dispatch(closeModal())
		resolver(data)
	}
	const clearModal = () => {
		console.log('exited')
		// dispatch(toggleModal())
	}
	console.log(show)
	return (
		<Modal
			center
			open={show}
			onClose={onCloseModal}
			onAnimationEnd={clearModal}
			classNames={{
				modal: cn('modal-body modal-dialog', className),
				overlay: 'custom-modal-overlay',
			}}>
			{ title && <h3>{title}</h3> }
			{ content && <content.type closeMe={onCloseModal} {...content.props} /> }
    </Modal>
	)
}

const mapStateToProps = ({ui}) => ({
	...ui.modal
})

export default connect(mapStateToProps)(CustomModal)
