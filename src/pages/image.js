import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => {
  console.log(props)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img fluid={props.data.image1.childImageSharp.fluid} />
      <Img fluid={props.data.image2.childImageSharp.fluid} />
    </div>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "sample.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(relativePath: { eq: "bed-steps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
