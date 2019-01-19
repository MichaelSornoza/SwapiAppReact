import React from 'react'
import './modal-content.scss'
import '../../styles/main.scss'

const ModalContent = ({data, category, handleAddPage, handleSubtractPage}) => (
  <div className="tile">
    <div className="tile is-vertical">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary">
            {
              data.map(el => (
                <p className="subtitle has-text-centered">{el.name}</p>
              ))
            }
          </article>
          <div className="button-div">
            <a className="button is-dark" onClick={() => handleSubtractPage()}>◀️</a>
            <a className="button is-dark next" onClick={() => handleAddPage()}>▶️</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ModalContent
