import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Style from "./blog-post.module.css"


export default ({ data }) => {
    let post = data.markdownRemark
    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
      
    return(
        <Layout>
            <article className={Style.artContiner}>
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={featuredImgFluid} className={Style.imgs} />
                <div dangerouslySetInnerHTML={{ __html: `<div> ${post.html} </div>` }} />
            </article>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`