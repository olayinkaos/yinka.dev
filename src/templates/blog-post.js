import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { DiscussionEmbed } from 'disqus-react'
import blogStyles from './blog-post.module.css'
import SocialShare from '../components/social-share'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const location = get(this.props, 'location')
    const featuredImgSrc = get(post, 'heroImage.fluid.src}')
    const disqusShortname = 'olayinkaos'
    const disqusConfig = {
      identifier: post.slug,
      title: post.title,
    }

    return (
      <Layout location={location}>
        <SEO title={post.title} location={location.href} image={featuredImgSrc} />

        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <Link className={blogStyles.backButton} to="/blog">
                ← back to blog
              </Link>

              <h1 className="post-heading">{post.title}</h1>
              <Img
                className={blogStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />

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
                  url={location.href}
                  title={post.title}
                  tags={post.tags}
                />
              </div>

              <hr />

              <div className={blogStyles.disqusContainer}>
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
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
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
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
