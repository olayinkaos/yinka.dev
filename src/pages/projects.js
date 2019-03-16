import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import get from 'lodash/get'
import Layout from '../components/layout'
import ContentPreviewList from '../components/content-preview-list'

class Projects extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="projects" />

        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <h4>some interesting projects i've worked on</h4>
              <ContentPreviewList
                contents={posts.map(({ node }) => ({
                  key: node.id,
                  link: node.link,
                  title: node.title,
                  description: node.description.childMarkdownRemark.html,
                  subtitle: node.date,
                }))}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          link
          date(formatString: "MMMM, YYYY")
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
