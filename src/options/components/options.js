import React, { Component } from 'react'
import Option from './option'
import '../../styles/main.scss'
import './options.scss'

class Options extends Component {

  state = {
    selectedCategory: '',
    categorys: []
  }

  handleOpenCategory = (category) => {
    console.log(this.Option);
    /*console.log(this);
    this.setState({
      selectedCategory: category
    })
    this.props.handleOpenModal(this.state.selectedCategory)*/
  }

  setOptionRef = el => {
    this.Option = el
  }
/*
  render () {
    return (
      <div>
        <div className='columns Options'>

        </div>
      </div>
    )
  }
*/
  render () {
    return (
      <div>
        <div className='columns Options'>
          {
            this.props.options.map(option =>{
              return(
                <Option
                  setRef={this.setOptionRef}
                  {...option}
                  handleClick={this.handleOpenCategory}
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
