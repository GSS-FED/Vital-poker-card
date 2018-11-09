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
                fluid(maxWidth: 1920) {
                  originalName
                  ...GatsbyImageSharpFluid_noBase64
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
          return d.node.childImageSharp.fluid.originalName === imgName + '.png'
      })
      return (
        <Img
          title="Header image"
          alt="Greek food laid out on table"
          fluid={result[0].node.childImageSharp.fluid}
          style={
            customStyle // sizes={data.landing.edges[0].node.childImageSharp.sizes}
          }
          className={WrapperClassName}
        />
      )
    }}
  />
)

export default QueryImgBlur
