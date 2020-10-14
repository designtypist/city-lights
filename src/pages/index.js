import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from '../components/container'
import Layout from '../components/layout'
import Article from '../components/article'
import Quote from '../components/quote'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const citylightsActivities = get(this, 'props.data.allContentfulActivity.edges')
    const slides = get(this, 'props.data.allContentfulSlide.edges')
    const quote = { text:'Hit us up for more information ony any of these. Looking forward to connecting with you.',
                    link:'/connect/', button:'Connect' }

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <main>
          <div class="splash">
            <div class="flex flex-wrap bg-black sm:pb-8">
              <div class="flex-initial xl:w-1/2 sm:w-full items-start">
                <h1 class="uppercase text-white xl:text-left sm:text-center p-8">The Hip-Hop Community and God</h1>
              </div>
              <div class="flex-initial carousel items-center sm:my-0 mx-auto xl:w-1/3 sm:w-3/5">
                <div class="carousel-inner">
                  <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked" />
                  <div class="carousel-item">
                    <div class="slide-images">
                      <div class="slide-image">
                        <h3>{slides[0].node.title}</h3>
                        <img src={slides[0].node.image.fluid.src} alt="" />
                      </div>
                      <div class="slide-image">
                        <h3>{slides[1].node.title}</h3>
                        <img src={slides[1].node.image.fluid.src} alt="" />
                      </div>
                    </div>
                  </div>
                  <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
                  <div class="carousel-item">
                  <div class="slide-images">
                      <div class="slide-image">
                        <h3>{slides[2].node.title}</h3>
                        <img src={slides[2].node.image.fluid.src} alt="" />
                      </div>
                      <div class="slide-image">
                        <h3>{slides[3].node.title}</h3>
                        <img src={slides[3].node.image.fluid.src} alt="" />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="carousel-2" for="carousel-2" class="carousel-control next control-1">›</label>
                  <label htmlFor="carousel-1" for="carousel-1" class="carousel-control prev control-2">‹</label>
                  <label htmlFor="carousel-2" for="carousel-2" class="carousel-control prev control-1">‹</label>
                  <label htmlFor="carousel-1" for="carousel-1" class="carousel-control next control-2">›</label>
                  <ol class="carousel-indicators hidden">
                    <li>
                        <label htmlFor="carousel-1" for="carousel-1" class="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-2" for="carousel-2" class="carousel-bullet">•</label>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="flex-initial xl:w-1/2 sm:w-full">
              <h2 class="text-black xl:text-left sm:text-center p-8">Hip-Hop Culture × Love × Jesus</h2>
            </div>
          </div>
          <Container>
            <div class="story pt-6">
              <h3 id="who-we-be" class="section-headline">Who We Be</h3>
              <div>
                <div class="float-left inline-block mr-6 mb-6">
                  <img src="../citylights-image.jpg" alt="City Lights Caption" />
                </div>
                <p class="lg:text-xl text-base">
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
            <Quote quote={quote} />
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
  allContentfulSlide {
    edges {
      node {
        title
        image {
          fluid(maxWidth: 600, maxHeight: 400, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`