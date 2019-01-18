import React from 'react'
import '../../styles/main.scss'
import './options.scss'

const Option = props => (
  <div className='column is-one-quarter' ref={props.setRef} onClick={props.handleClick}>
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={props.imgUrl} alt={props.title} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <div className='p title.is-6 has-text-centered'>
              <strong>{props.title}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Option
