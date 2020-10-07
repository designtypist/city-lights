import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [pageHeader] = get(this, 'props.data.allContentfulPageHeader.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle}>
            <script src="https://apps.elfsight.com/p/platform.js" defer />
          </Helmet>
          <Hero data={pageHeader.node} />
          <Container>
            <div class="my-12">
              <h3 class="section-headline">Photos</h3>
              <div class="elfsight-app-23f344d7-2395-4ce5-b512-2ac42893be7b"></div>
            </div>
            <div class="my-12">
              <h3 class="section-headline">Videos</h3>
              <div class="flex">
                <iframe class="w-1/2 inline-block" width="600" height="400" title="video 1" src="https://www.youtube.com/embed/T8qWtxxF64s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe class="w-1/2 inline-block" width="600" height="400" title="video 2" src="https://www.youtube.com/embed/LJGLn-IwpN4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`{
  allContentfulPageHeader(
      filter: {
        name: {
          regex: "/Media/"
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