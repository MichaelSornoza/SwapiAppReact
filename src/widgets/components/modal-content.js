import React from 'react'
import '../../styles/main.scss'
const ModalContent = props => (

<div className="tile">
  <div className="tile is-vertical">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">{props.data}</p>
          <p className="subtitle">Top tile</p>
          <p className="subtitle">Top tile</p>
          <p className="subtitle">Top tile</p>
          <p className="subtitle">Top tile</p>
          <p className="subtitle">Top tile</p>
        </article>
      </div>
    </div>
  </div>
</div>

)

export default ModalContent
