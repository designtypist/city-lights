import React from 'react'
import 'tailwindcss/dist/base.min.css'
import './base.css'
import '../utils/fontawesome'
import Header from './header'
import Footer from './footer'
import Helmet from 'react-helmet'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/sav6yld.css" />
          <script
              dangerouslySetInnerHTML={{
                __html: `
                `,
              }}
          />
        </Helmet>
        <Header />
          {children}
        <Footer />
      </div>
    )
  }
}

export default Template
