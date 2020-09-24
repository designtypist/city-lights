import React from 'react'
import get from 'lodash/get'
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
          <h3 class="uppercase font-bold">Want to get in touch with us?</h3>
          <p class="italic">Send us an email using citylights@thewordbecamefresh.ca or you can use the form below which ever floats your boat :D</p>
          <form class="w-full mt-16 mb-32">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="johndoe@thewordbecamefresh.ca" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea class=" no-resize appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Your message goes here"></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button class="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8" type="button">
                  Send
                </button>
              </div>
            </div>
          </form>
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
          regex: "/Contact/"
        }
      }
    ) {
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
  }
`