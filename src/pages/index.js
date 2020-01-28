import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import Style from "./index.module.css"

export default ({ data }) => {
    return (
        <Layout>
          <section className={Style.sectionIndex}>
            <h1>Last post</h1>
            <p>See last posts and know to different opinions about  works and more</p>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Posts 
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  src={node.frontmatter.featuredImage.childImageSharp.fluid}
                  description={node.excerpt}
                />
              </div>
            ))}   
          </section>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`