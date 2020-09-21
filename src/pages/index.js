import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Article from '../components/article'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const activities = get(this, 'props.data.allContentfulActivity.edges')

    return (
      <Layout location={this.props.location}>
        <main>
          <div class="splash blob">
            <h1>Hip-Hop Community Matters to God</h1>
            <div class="carousel">
              <div class="carousel-inner">
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
                </div>
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
                </div>
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
                </div>
                <label for="carousel-3" class="carousel-control prev control-1">‹</label>
                <label for="carousel-2" class="carousel-control next control-1">›</label>
                <label for="carousel-1" class="carousel-control prev control-2">‹</label>
                <label for="carousel-3" class="carousel-control next control-2">›</label>
                <label for="carousel-2" class="carousel-control prev control-3">‹</label>
                <label for="carousel-1" class="carousel-control next control-3">›</label>
                <ol class="carousel-indicators">
                  <li>
                      <label for="carousel-1" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label for="carousel-2" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label for="carousel-3" class="carousel-bullet">•</label>
                  </li>
                </ol>
              </div>
            </div>
            <h3>That's why he sent Jesus Christ and that's why he sends us</h3>
          </div>
          <div class="story pt-6">
            <h3 class="section-headline">Our Story</h3>
            <div>
              <div class="float-left inline-block box-border h-20 w-48 p-4 border-4 border-gray-400 bg-gray-200 mr-4 mb-4">
                <div class="h-full w-full bg-gray-400"></div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec 
                nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. 
                Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus 
                mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, 
                vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. 
                Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar 
                libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
              </p>
            </div>
          </div>
          {activities.map(({ node }) => {
            return (
              <section key={node.id}>
                <Article 
                  title={node.title}
                  description={node.description.description}
                  image={node.image.file.url}
                />
              </section>
            )
          })}
          <div class="bg-auto bg-gray-300 text-center p-12 my-24">
            <h3 class="italic mb-6">“Hit us up for more information ony any of these. Looking forward to connecting with you.”</h3>
            <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/connect/">Connect</Link>
          </div>
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