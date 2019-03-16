import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeColumn from '../components/home-column'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const photos = get(this, 'props.data.allContentfulPhoto.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title="hello" />

        <div className="container">
          <div className="row">
            <div id="intro-shapes-container">
              <div id="intro-shapes" className="a-5">
                <svg height="210" width="120%">
                  <polygon id="tri-1" points="90,10 140,190 50,210" />
                  <circle
                    id="circle-1"
                    cx="170"
                    cy="100"
                    r="65"
                    stroke="orange"
                    strokeWidth="1"
                    fill="none"
                  />
                  <rect id="hero-rect" x="30" y="100" width="140" height="80" />
                  <rect id="rect-2" x="160" y="20" width="100" height="60" />
                  <polygon id="tri-2" points="140,110 280,150 170,200" />
                </svg>
              </div>
            </div>

            <div id="intro-text-container">
              <div id="intro-text">
                <h2 className="a-1">software developer &amp; human</h2>

                <div className="a-3">
                  <p>
                    I'm olayinka omole, or just yinka (pronounced yeen-ka), a
                    software developer currently based in London. I spend most of
                    my time building and maintaining software that make people's
                    lives easier.
                    <br />
                  </p>

                  <p className="a-3">
                    You can find me on{' '}
                    <a href="http://twitter.com/olayinkaos">Twitter</a>,{' '}
                    <a href="http://github.com/olayinkaos">Github</a>,{' '}
                    <a href="http://instagram.com/olayinkaos">Instagram</a> and{' '}
                    <a href="http://medium.com/@olayinka.omole">Medium</a>. You
                    can also just send me a mail if you want to discuss anything
                    interesting -{' '}
                    <a href="mailto:me@olayinkaos.com">me@olayinkaos.com</a>.
                  </p>

                  <p className="a-3">
                    <Link to="/about">read more about me →</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="main-content" className="a-4">
          <div className="container">
            <div className="row">
              <HomeColumn
                title="latest posts"
                items={posts.map(p => ({
                  title: p.node.title,
                  titleLink: `/blog/${p.node.slug}`,
                  subtitle: p.node.publishDate,
                }))}
                viewMoreLink="/blog"
              />

              <HomeColumn
                title="recent projects"
                items={projects.map(p => ({
                  title: p.node.title,
                  titleLink: p.node.link,
                  subtitle: p.node.date,
                }))}
                viewMoreLink="/projects"
              />

              <HomeColumn
                title="recent photos"
                items={photos.map(p => ({
                  title: p.node.title,
                  titleLink: p.node.link,
                  subtitle: p.node.platform,
                }))}
                viewMoreLink="/photos"
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(
      limit: 3
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
    allContentfulProject(limit: 3, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          link
          date(formatString: "MMMM, YYYY")
        }
      }
    }
    allContentfulPhoto(limit: 3, sort: { fields: [createdDate], order: DESC }) {
      edges {
        node {
          title
          link
          platform
          createdDate(formatString: "MMMM, YYYY")
        }
      }
    }
  }
`
