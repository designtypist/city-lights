import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Container from '../components/container'
import Hero from '../components/hero'

class RootIndex extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [pageHeader] = get(this, 'props.data.allContentfulPageHeader.edges')
    
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={pageHeader.node} />
        <Container>
          <div class="my-16">
            <h2>Thank you!</h2>
            <p class="pb-4">We will get back to you as soon as possible! :D</p>
            <a href="/" class="bg-black text-white font-bold py-2 px-4 rounded">Go Back to Homepage</a>
          </div> 
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`{
  allContentfulPageHeader(
      filter: {
        name: {
          regex: "/Thanks/"
        }
      }
    ) {
      edges {
        node {
          name
          heroImage: image {
            fluid(maxWidth: 1180, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`