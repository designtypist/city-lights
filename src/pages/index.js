import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import Layout from '../components/layout'
import Article from '../components/article'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const citylightsActivities = get(this, 'props.data.allContentfulActivity.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <main>
          <div class="splash">
            <h1 class="uppercase text-right text-white">Hip-Hop Community Matters to God</h1>
            <div class="carousel">
              <div class="carousel-inner">
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/600x400/0079D8/fff/?text=Without" alt="" />
                  <img src="http://fakeimg.pl/600x400/DA5930/fff/?text=JavaScript" alt="" />
                </div>
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/600x400/0079D8/fff/?text=Without" alt="" />
                  <img src="http://fakeimg.pl/600x400/F90/fff/?text=Carousel" alt="" />
                </div>
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/600x400/F90/fff/?text=Carousel" alt="" />
                  <img src="http://fakeimg.pl/600x400/DA5930/fff/?text=JavaScript" alt="" />
                </div>
                <label htmlFor="carousel-3" for="carousel-3" class="carousel-control prev control-1">‹</label>
                <label htmlFor="carousel-2" for="carousel-2" class="carousel-control next control-1">›</label>
                <label htmlFor="carousel-1" for="carousel-1" class="carousel-control prev control-2">‹</label>
                <label htmlFor="carousel-3" for="carousel-3" class="carousel-control next control-2">›</label>
                <label htmlFor="carousel-2" for="carousel-2" class="carousel-control prev control-3">‹</label>
                <label htmlFor="carousel-1" for="carousel-1" class="carousel-control next control-3">›</label>
                <ol class="carousel-indicators hidden">
                  <li>
                      <label htmlFor="carousel-1" for="carousel-1" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label htmlFor="carousel-2" for="carousel-2" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label htmlFor="carousel-3" for="carousel-3" class="carousel-bullet">•</label>
                  </li>
                </ol>
              </div>
            </div>
            <h3 class="text-center text-white">That's why he sent Jesus Christ and that's why he sends us</h3>
          </div>
          <Container>
            <div class="story pt-6">
              <h3 class="section-headline">Our Story</h3>
              <div>
                <div class="float-left inline-block mr-8 mb-8">
                  <img src="./citylights-image.jpg" alt="City Lights Caption" />
                </div>
                <p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec 
                  nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. 
                  Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus 
                  mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, 
                  vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. 
                  Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar 
                  libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
                </p>
                <div class="mt-8 mb-24">
                  <img src="./sonz-graffiti.png" alt="Sonz Graffiti"/>
                </div>
              </div>
            </div>
            <div class="activities my-12">
              <h2 class="section-headline">City Lights Activities</h2>
              {citylightsActivities.map(({ node }) => {
                return (
                  <section key={node.id}>
                    <Article data={node} />
                  </section>
                )
              })}
            </div>
            <div class="bg-auto bg-gray-300 text-center p-12 my-24">
              <h3 class="italic mb-6">“Hit us up for more information ony any of these. Looking forward to connecting with you.”</h3>
              <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/connect/">Connect</Link>
            </div>
          </Container>
        </main>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`{
  allContentfulActivity {
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