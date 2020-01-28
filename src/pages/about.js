import React from "react"
import Layout from "../components/layout"
import Cards from "../components/about_card";

export default () => {
  
  return (
    <Layout>      
        <Cards 
          typeCard={".Aclass"}
          title={"About Me"}
          description={"Analista en sistemas y diseñdor digital. Argentino, actualmente viviendo en Rosario, Santa Fe.  Termine mis estudios a fines de 2019 y actualmente me encuentro adentrandome en el mercado laboral, en busca de oportunidades que me ayuden a crecer como profesional y presenten retos que fortalezcan mis habilidades y conocimientos"} 
          src={"/static/41bb2678b9145ea889019e00e43ff3eb/a52cf/rober.jpg"} />
        <Cards 
          typeCard={".Bclass"}
          title={"Full Stack Developer"}
          description={"Enfocado en el desarrollo web. Investigando y explorando nuevas herramientas. Dentro de las herramientas de frontend que utilizo se encuentra Angular, React.js, Gatsby (utilizado para desarrollar este sitio). Para el backend Spring, aunque actualmente me encuentro indagando en el mundo de .NET"} 
          src={"/static/4a9c4e6959ffcd7d0b01aaf9e8c0845a/ba1c0/full-stack.png"} />
        <Cards 
          typeCard={".Aclass"}
          title={"3D Modeling and Animation"}
          description={"Crecion de imagenes y animacion a partir de modelados 3D, utilzando 3D Max."} 
          src={"/static/383829c192e798c9a7ae204ae6a1c860/836e4/3d-img.png"} />
        <Cards 
          typeCard={".Bclass"}
          title={"Adobe Package"}
          description={"Experiencia en los siguientes softare de Adobe."} 
          src={"/static/ed894944fe21276d856b2596f12d95d7/50788/adobe-package.png"} />
    </Layout>
  )
}

/*
export default () => {
  const img_about = useStaticQuery(graphql`
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
      {img_about.allFile.edges.map( ({node},i)  => ( 
        <Cards description={"Algo para acotar"} src={"/static/383829c192e798c9a7ae204ae6a1c860/836e4/3d-img.png"} />
      ))}
      
    </Layout>
  )
}
*/ 