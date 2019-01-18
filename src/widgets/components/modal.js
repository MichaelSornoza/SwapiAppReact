import React from 'react'
import ModalContent from './modal-content'
import '../../styles/main.scss'

const Modal = props => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-content">
      <ModalContent data={props.data}/>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={props.handleClick}
    >
    </button>
  </div>
)

export default Modal
