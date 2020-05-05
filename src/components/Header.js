import React from 'react'

// import logo from '../assets/images/fd00d518-510d-4d1a-9324-58022eea30f8_200x200.png'

import logo from '../assets/images/title-3.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img
        src={logo}
        alt="Jenny and Sandy, 5.6.21, Bedruthan Steps, Cornwall"
      />
    </span>
  </header>
)

export default Header
