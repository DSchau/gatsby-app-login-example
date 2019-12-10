import React, { useState, useEffect } from "react"

import SEO from "../components/seo"

import styles from './index.module.css'

const login = ({ actions }) => {
  actions.setAuthenticated(true)
  window.localStorage.setItem(`authenticated`, true)
}

const logout = ({ actions }) => {
  actions.setAuthenticated(false)
  window.localStorage.removeItem(`authenticated`)
}

const IndexPage = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const actions = { setAuthenticated }
  useEffect(() => {
    // mimic getting auth
    // set in localStorage for repeat visits
    setAuthenticated(localStorage.getItem(`authenticated`) === `true`)
  }, [])
  return (
    <div className={[styles.root, authenticated ? styles.app : styles.main].join(' ')}>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={() => authenticated ? logout({ actions }) : login({ actions })}>{authenticated ? `Logout` : `Login`}</button>
    </div>
  )
}

export default IndexPage
