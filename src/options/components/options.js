import React, { Component } from 'react'
import Option from './option'
import '../../styles/main.scss'
import './options.scss'

class Options extends Component {
  
  render () {
    return (
      <div>
        <div className='columns Options'>
          {
            this.props.options.map(option =>{
              return(
                <Option
                  {...option}
                  handleClick={this.props.handleOpenModal}
                  key={option.category}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Options
