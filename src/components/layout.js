import React from 'react'
import 'tailwindcss/dist/base.min.css'
import './base.css'
import '../utils/fontawesome'
import Header from './header'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
          {children}
        <Footer />
      </div>
    )
  }
}

export default Template
