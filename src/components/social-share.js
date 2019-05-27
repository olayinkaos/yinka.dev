import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share'
import 'font-awesome/css/font-awesome.min.css'
import './social-share.scss'

export default ({ title, tags, url }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const { author } = site.siteMetadata

  return (
    <div className="post-social">
      <h5>Share via:</h5>
      <TwitterShareButton
        url={url}
        className="button twitter"
        title={title}
        via={author}
      >
        <span className="icon">
          <i className="fa fa-twitter">&nbsp;</i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>

      <FacebookShareButton url={url} className="button facebook">
        <span className="icon">
          <i className="fa fa-facebook-f">&nbsp;</i>
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>

      <RedditShareButton url={url} className="button reddit" title={title}>
        <span className="icon">
          <i className="fa fa-reddit-alien">&nbsp;</i>
        </span>
        <span className="text">Reddit</span>
      </RedditShareButton>

      <LinkedinShareButton url={url} className="button linkedin" title={title}>
        <span className="icon">
          <i className="fa fa-linkedin">&nbsp;</i>
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>

      <WhatsappShareButton url={url} className="button whatsapp" title={title}>
        <span className="icon">
          <i className="fa fa-whatsapp">&nbsp;</i>
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </div>
  )
}
