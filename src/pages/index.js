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
            <h1 class="uppercase text-right text-white">The Hip-Hop Community &amp; God</h1>
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
            <h3 class="text-center text-white">Hip-Hop Culture × Love × Jesus</h3>
          </div>
          <Container>
            <div class="story pt-6">
              <h3 class="section-headline">Who We Be</h3>
              <div>
                <div class="float-left inline-block mr-8 mb-8">
                  <img src="../citylights-image.jpg" alt="City Lights Caption" />
                </div>
                <p class="text-xl">
                  God loved the world – including the hip-hop community – so much that he sent his Son, Jesus, not to
                  condemn us, but to save us. Jesus showed us the love &amp; truth of God, died for our sins &amp; resurrected,
                  and Jesus left us with a mission: Going and making disciples (“apprentices”), baptising them and
                  teaching them to follow all that he taught. 
                  One people group that is often left out is the hip-hop community: emcees, deejays, breakers, graffiti
                  writers, those involved with knowledge, fans, etc. God has called us to reach them, in their
                  world/culture, and to make disciples that make more disciples.
                  The vision is to see Canada’s hip-hop community following Jesus Christ. We will do this by providing
                  events to better their skills, events to serve others, building genuine loving relationships, and discipling
                  them in a way that is natural to the hip-hop culture.
                  Can you imagine how dope it will be if, because they follow Jesus so well, that instead of having a
                  reputation for misogyny, drugs, and violence, they became known for their grace, generosity, kindness,
                  peace, joy, and helping others have a relationship with God?
                  There is no blueprint for this pioneering mission (in Canada), we will be faithful to the work as God
                  makes the work fruitful. We will love the people, encourage the hip-hop elements, bring &amp; show the
                  truth of Christ, and let God lead – all while being ourselves.
                </p>
                <div class="mt-8 mb-24">
                  <img src="../sonz-graffiti.png" alt="Sonz Graffiti"/>
                </div>
              </div>
            </div>
            <div class="activities my-12">
              <h2 class="section-headline">City Lights Activities</h2>
              <section>
                {citylightsActivities.map(({ node }, index) => {
                  return (
                    <article key={node.id}>
                      {index % 2 === 0 ? 
                        <Article data={node} position='left' />
                        :
                        <Article data={node} position='right' />
                      }
                    </article>
                  )
                })}
              </section>
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