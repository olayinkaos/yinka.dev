import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import get from 'lodash/get'
import Layout from '../components/layout'
import ContentPreviewList from '../components/content-preview-list'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="blog" />

        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <h4>recent posts</h4>
              <ContentPreviewList
                contents={posts.map(({ node }) => ({
                  key: node.slug,
                  link: `/blog/${node.slug}`,
                  title: node.title,
                  description: node.description.childMarkdownRemark.html,
                  subtitle: node.publishDate,
                }))}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
