import React, { Component } from 'react'
import Axios from 'axios'
import ParticlesComponent from '../../particles/components/particle'
import Spinner from '../../spinner/components/spinner'
import HomeLayout from '../components/home-layout'
import Footer from '../../layouts/components/footer'
import Options from '../../options/components/options'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ModalContent from '../../widgets/components/modal-content'

class HomeContainer extends Component {

  state = {
    url: 'https://swapi.co/api/!category/!page',
    modalVisible: false,
    selectedCategory: '',
    modalContentVisible: false,
    selectedPage: 1,
    showSpinner: false,
    info: []
  }

  handleOpenModal = (category) => {

    this.setState({
      selectedCategory: category,
      modalVisible: true,
      showSpinner: true
    })
    this.handleRequest(category)
  }

  handleRequest = category => {
    let page = this.state.selectedPage
    let url = this.state.url.replace(
      '!category/!page',
      `${category}/?page=${page}`
    )
    Axios.get(url)
      .then(response => {
        this.setState({
          info: response.data.results,
          showSpinner: false,
          modalContentVisible: true
        })
      })
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
      info:[],
      selectedPage: 1,
      selectedCategory: ''
    })
  }

  handleAddPage = () => {
    if(this.state.selectedPage >= 1) {
      this.setState({
        selectedPage: this.state.selectedPage++,
        showSpinner: true,
        modalContentVisible: false
      })
      console.log(this.state.selectedPage)
      this.handleRequest(this.state.selectedCategory)
    }
  }

  handleSubtractPage = () => {
    if(this.state.selectedPage > 1) {
      this.setState({
        selectedPage: this.state.selectedPage--,
        showSpinner: true,
        modalContentVisible: false
      })
      console.log(this.state.selectedPage)
      this.handleRequest(this.state.selectedCategory)
    }
  }

  render() {
    return(
      <div>
        <HomeLayout>
          <ParticlesComponent />
          <Options
            options={this.props.data.options}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                {
                  this.state.showSpinner ?
                    <Spinner />
                    :
                    <ModalContent
                      data={this.state.info}
                      category={this.state.category}
                      handleAddPage={this.handleAddPage}
                      handleSubtractPage={this.handleSubtractPage}
                    />
                }
              </Modal>
            </ModalContainer>
          }
          <Footer />
        </HomeLayout>
      </div>
    )
  }
}

export default HomeContainer
