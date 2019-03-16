import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import get from 'lodash/get'
import Layout from '../components/layout'
import ContentPreviewList from '../components/content-preview-list'

class Photos extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPhoto.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="projects" />

        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <h4>photos i'm most proud of</h4>
              <ContentPreviewList
                contents={posts.map(({ node }) => ({
                  key: node.id,
                  link: node.link,
                  title: node.title,
                  subtitle: node.platform,
                }))}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Photos

export const pageQuery = graphql`
  query PhotosPageQuery {
    allContentfulPhoto {
      edges {
        node {
          title
          link
          platform
        }
      }
    }
  }
`
