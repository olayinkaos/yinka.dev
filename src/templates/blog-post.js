import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'
import * as blogStyles from './blog-post.module.css'
import SocialShare from '../components/social-share'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const location = get(this.props, 'location')
    const featuredImg = getImage(get(post, 'heroImage'))
    const featuredImgSrc = getSrc(get(post, 'heroImage'));

    // Construct the full URL for og:url
    const slug = get(this.props, 'pageContext.slug')
    const fullUrl = `https://yinka.dev/blog/${slug}/`

    return (
      <Layout location={location}>
        <SEO
          title={post.title}
          location={fullUrl}
          image={featuredImgSrc}
          description={post.description.internal.content}
        />

        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <Link className={blogStyles.backButton} to="/blog">
                ← back to blog
              </Link>

              <h1 className="post-heading">{post.title}</h1>
              {/* <Img
                className={blogStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              /> */}
              <GatsbyImage image={featuredImg} alt={post.title} />

              <h6 className="subtitle">
                <small>{post.publishDate}</small>
              </h6>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />

              <hr />

              <div>
                <SocialShare
                  url={fullUrl}
                  title={post.title}
                  tags={post.tags}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(width: 1180, backgroundColor: "rgb:000000", placeholder: DOMINANT_COLOR)
      }
      description {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`
