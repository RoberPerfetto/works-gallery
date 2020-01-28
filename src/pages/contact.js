import React from "react"
import Layout from "../components/layout"
import Style from "./contact.module.css"

export default () => (
  <Layout>
    <div className={Style.containerForm}>
      <h1>Contact me!</h1>
      <p>Leave me a question or request to do some work.</p>
      <form  action="https://formspree.io/mwklbwkr"  method="POST">
        <div className={Style.rowForm}>
          <div className={Style.colForm25}>
            <label className={Style.labelForm} > Your email: </label>
          </div>
          <div className={Style.colForm75}>
            <input type="email" name="_replyto" placeholder="somebody@example.com" className={Style.inputForm} required />
          </div>
        </div>
        <div className={Style.rowForm}>
          <div className={Style.colForm25}>
            <label className={Style.labelForm}>Your message: </label>
          </div>
          <div className={Style.colForm75}>
            <textarea name="message" placeholder="Your message..." className={Style.textForm} required></textarea>
          </div>
        </div>
        <div className={Style.rowForm}>  
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </Layout>
)
