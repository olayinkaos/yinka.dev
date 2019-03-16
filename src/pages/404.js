import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="page not found" />

    <div className="container">
      <div className="row">
        <div className="two-thirds column">
          <h4>page not found</h4>
          <p>looks like you're looking for something that doesn't exist. but in a way, aren't we all?</p>
          
          <p>
          <Link to="/">← go home</Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
