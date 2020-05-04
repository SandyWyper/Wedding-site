import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Helmet from 'react-helmet'

const Thankyou = () => (
  <Layout>
    <Helmet title="Jenny &amp; Sandy" />
    <Header />

    <div id="main" className="p-3">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Thank You</h2>
          </header>
          <p>Your RSVP has been submitted.</p>
          <Link to="/">Return to the website</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Thankyou
