import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Jenny &amp; Sandy" />
    <Header />

    <div id="main" className="p-3">
      <h1>NOT FOUND</h1>
      <p>I can see my house from here!</p>
      <Link to="/">Back home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
