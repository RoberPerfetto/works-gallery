import React from "react"
import Style from "./works.module.css"
import Img from "gatsby-image"

export default props => {
    return (
        <article className={Style.articles}>
          <a target="_blank"  rel="noopener noreferrer" href={props.href}>
            <Img  fluid={props.src} alt={props.alt} className={Style.imgWork} />
          </a>
        </article>
    )
}

