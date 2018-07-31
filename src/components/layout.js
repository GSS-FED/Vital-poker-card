import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import './layout.css'

const Titlebox = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        heroAssets: allFile(filter: { absolutePath: { regex: "/header/" } }) {
          edges {
            node {
              childImageSharp {
                sizes(maxWidth: 1280) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title}  headerImage={data.heroAssets.edges[0].node.childImageSharp} /> */}
        <Header
          siteTitle={data.site.siteMetadata.title}
          headerImage={data.heroAssets.edges[0].node.childImageSharp}
        />
        <Titlebox>styled-component</Titlebox>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
