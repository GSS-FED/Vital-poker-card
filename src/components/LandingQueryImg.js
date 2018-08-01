import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LandingQueryImg = ({ imgName, customClass }) => (
  <StaticQuery
    query={graphql`
      query LandingQuery {
        landing: allFile(filter: { absolutePath: { regex: "/Landing/" } }) {
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
      console.log('-------------------------------------------------')
      console.log(imgName)
      console.log(data)
      const result = data.landing.edges.filter(d => {
        return d.node.childImageSharp.sizes.originalName === imgName + '.png'
      })
      console.log(result)
      console.log('-------------------------------------------------')
      return (
        <Img
          title="Header image"
          alt="Greek food laid out on table"
          sizes={result[0].node.childImageSharp.sizes}
          // sizes={data.landing.edges[0].node.childImageSharp.sizes}
          style={customClass}
        />
      )
    }}
  />
)

export default LandingQueryImg
