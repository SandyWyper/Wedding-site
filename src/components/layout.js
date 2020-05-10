import React from 'react'
import '../assets/scss/main.scss'
import background from '../assets/images/background-new-light-60.jpg'
import mobileBackground from '../assets/images/background-mobile-90.jpg'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <picture>
          <source srcSet={mobileBackground} media="(max-width: 450px)" />
          <img className="background" src={background} alt="logo" />
        </picture>
        <div id="wrapper">
          {children}
          <div className="footer-spacing" />
        </div>
      </div>
    )
  }
}

export default Template
