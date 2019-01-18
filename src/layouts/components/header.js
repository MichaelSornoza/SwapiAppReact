import React from 'react'
import '../../styles/main.scss'
import './header.scss'
const Header = () => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo"/>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
      </div>
    </div>
  </nav>

)

export default Header
