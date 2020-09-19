import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

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
            <h3>That's why he sent  Jesus Christ  and that's why he sends us</h3>
          </div>
          <div class="story">
            <h3>Our Story</h3>
            <img />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, odio elit sed turpis 
              leo, felis nibh lacinia viverra. Odio integer cursus duis faucibus. Et tortor lectus 
              mauris amet nisi in ut dignissim in. Mauris senectus ac mauris feugiat commodo 
              id viverra ut adipiscing. Sit sociis pretium pretium erat. Arcu nunc ornare a amet 
              vestibulum, pellentesque mi. Lacus, eget vitae velit eu augue amet. Ullamcorper 
              ultrices eu eu facilisi ac amet ac nisl. Dui aliquam eleifend nulla leo lobortis.
            </p>
          </div>
          <div class="come-join-us">
            <section>...</section>
          </div>
          <div class="quote">
            <p>“Hit us up for more information ony any of these. Looking forward to connecting with you.”</p>
            <Link to="/connect/">Connect</Link>
          </div>
        </main>
      </Layout>
    )
  }
}

export default RootIndex
