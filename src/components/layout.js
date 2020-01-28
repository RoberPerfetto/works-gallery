import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "./footer"
import faceIcon from "../img/icons8_facebook_1px_1.png"
import instaIcon from "../img/icons8_instagram_1px_3.png"
import linkedIcon from "../img/icons8_linkedin_circled_1px.png"
import styles from './layout.module.css'

export default ({children}) => {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return(
        <div className={styles.bodyMain}>
            <header className={styles.headerLayout}>
                <Link   
                    to={"/"}
                    className={styles.logo}
                >
                    <h1>{data.site.siteMetadata.title}</h1>
                </Link>
            </header>
            <nav className={styles.navMenu}>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com/rober.perfetto"><img src={faceIcon} alt="" /></a>
                    <a href="https://www.instagram.com/roberperfetto/"><img src={instaIcon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/robertino-perfetto-15827a103/"><img src={linkedIcon} alt="" /></a>
                </div>
                <div className={styles.linksGroup}>
                    <Link 
                        to={"/works/"}
                        className={styles.navLink}
                    >
                        <h2>Works</h2>
                    </Link>
                    <Link
                        to={"/about/"}
                        className={styles.navLink}
                    >
                        <h2>About</h2>
                    </Link>
                    <Link
                        to={"/contact/"}
                        className={styles.navLink}
                        >
                        <h2>Contact</h2>
                    </Link>
                </div>
            </nav>
            <section className={styles.bodySection}>
                {children}
            </section>
            <Footer />
        </div>
    )
}