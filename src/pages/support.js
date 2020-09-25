import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Article from '../components/article'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [pageHeader] = get(this, 'props.data.allContentfulPageHeader.edges')
    const partners = get(this, 'props.data.allContentfulPartner.edges')
    const citylightsOpportunities = get(this, 'props.data.allContentfulOpportunity.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={pageHeader.node} />
          <Container>
            <main>
              <div class="mission">
                <h2 class="section-headline">Mission: Statement of Faith</h2>
                <div class="bg-auto bg-gray-300 text-center p-12 my-24">
                  <h3 class="italic mb-6">““Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu felis nunc. Nulla diam risus, rhoncus. ””</h3>
                </div>
              </div>
              <div class="partners mb-12">
                <h2>Partners</h2>
                <hr />
                <ul class="flex my-6">
                  {partners.map(({ node }) => {
                    return (
                        <li class="w-1/4" target="_blank">
                          <a href={node.link} >
                            <img src={node.image.file.url} alt={node.name} />
                          </a>
                        </li>
                    )
                  })}
                </ul>
                <hr />
              </div>
              <div class="support-us my-12">
                <h2 class="section-headline text-right">Want to Support Us?</h2>
                {citylightsOpportunities.map(({ node }) => {
                  return (
                    <section key={node.id}>
                      <Article data={node} />
                    </section>
                  )
                })}
              </div>
            </main>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`
{
  allContentfulPageHeader (filter: { name: { regex: "/Support/" } }) {
    edges {
      node {
        name
        heroImage: image {
          fluid(maxWidth: 1180, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
  allContentfulPartner {
    edges {
      node {
        name
        link
        image {
          file {
            url
          }
        }
      }
    }
  }
  allContentfulOpportunity {
    edges {
      node {
        title
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
}
`