import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Container from '../components/container'
import Hero from '../components/hero'
import ContactForm from '../components/contactform'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [pageHeader] = get(this, 'props.data.allContentfulPageHeader.edges')
    const Mailto = ({ email, subject, body, children }) => {
      return (
        <a class="text-gray-600" href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
      );
    };

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={pageHeader.node} />
        <Container>
          <h3 class="uppercase md:text-left text-center font-bold">Want to get in touch with us?</h3>
          <p class="italic md:text-left text-center">
            Feel free to send us an
            <Mailto email="citylights@webecamefresh.ca" subject="Hi" body="Hello world!"> email </Mailto>
            or use the form below.
          </p>
          <ContactForm />
          
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`