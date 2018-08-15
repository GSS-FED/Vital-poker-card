import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const QueryImgBlur = ({ imgName, customStyle, WrapperClassName }) => (
  <StaticQuery
    query={graphql`
      query LandingQuery {
        landing: allFile(filter: { absolutePath: { regex: "/img/" } }) {
          edges {
            node {
              childImageSharp {
                sizes(maxWidth: 1280) {
                  originalName
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const result = data.landing.edges.filter(d => {
        if (d.node.childImageSharp !== null)
          return d.node.childImageSharp.sizes.originalName === imgName + '.png'
      })
      return (
        <Img
          title="Header image"
          alt="Greek food laid out on table"
          sizes={result[0].node.childImageSharp.sizes}
          style={
            customStyle // sizes={data.landing.edges[0].node.childImageSharp.sizes}
          }
          outerWrapperClassName={WrapperClassName}
        />
      )
    }}
  />
)

export default QueryImgBlur
