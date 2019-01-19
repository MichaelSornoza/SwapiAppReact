import React from 'react'
import '../../styles/main.scss'
import './options.scss'

const Option = ({title, imgUrl, category, handleClick}) => (
  <div className='column is-one-quarter' onClick={() => handleClick(category)}>
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={imgUrl} alt={title} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <div className='p title.is-6 has-text-centered'>
              <strong>{title}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Option
