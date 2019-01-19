import React from 'react'
import '../../styles/main.scss'

const Modal = ({children, handleClick}) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-content">
      {children}
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={handleClick}
    >
    </button>
  </div>
)

export default Modal
