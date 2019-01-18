import React, { Component } from 'react'
import Axios from 'axios'
import Header from '../../layouts/components/header'
import HomeLayout from '../components/home-layout'
import ParticlesComponent from '../../particles/components/particle'
import Options from '../../options/components/options'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

class HomeContainer extends Component {

  state = {
    url: 'https://swapi.co/api/!category/!page',
    modalVisible: false,
    category: 'people',
    page: 1,
    info: []
  }

  handleOpenModal = (category) => {
    this.setState({
      modalVisible: true,
    })
  }

  handleRequest = () => {
    let url = this.state.url.replace('!category/!page', `${this.state.category}/?page=${this.state.page}`)

    Axios.get(url)
      .then(response => {
        this.setState({
          info: response.data.results
        })
        console.log(response.data.results);
      })
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return(
      <div>
        <Header />
        <HomeLayout>
          <ParticlesComponent />
          <Options
            options={this.props.data.options}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                  data={this.state.info}
                >
                </Modal>
              </ModalContainer>
          }
        </HomeLayout>
      </div>
    )
  }
}

export default HomeContainer
