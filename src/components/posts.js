import React from "react"
import { Link } from "gatsby"
import Styles from "./posts.module.css"
import Img from "gatsby-image"

export default props => (
  
    <Link to={props.slug} className={Styles.linkWorks} >      
      <div className={Styles.works}>
        <span>
          {props.date}
        </span>
        <h1 className={Styles.title}>{props.title}</h1>
        <Img fluid={props.src} className={Styles.img} alt="" />
        <p className={Styles.text} > {props.description} </p>
      </div>
    </Link>
  )