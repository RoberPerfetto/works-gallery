import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Works from "../components/work_component"

export default () => {
  const img_works = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "img_works"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              originalImg
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)
    
  return (
    <Layout>
      <div style={{border: "0.1rem solid #F3F3F3"}} >
        { img_works.allFile.edges.map( ({ node },i) => (
          <Works key={i} src={node.childImageSharp.fluid} alt={node.name} href={node.childImageSharp.fluid.originalImg} />
        ))}
      </div>               
    </Layout>
  )
}

// , extension: {regex: "/(jpg|pgn)/"}}