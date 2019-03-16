import React from 'react'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="two-thirds column">
        <a href="https://twitter.com/olayinkaos">twitter</a> &middot;&nbsp;
        <a href="https://github.com/olayinkaos">github</a> ·&nbsp;
        <a href="https://medium.com/@olayinka.omole">medium</a> ·&nbsp;
        <a href="https://instagram.com/olayinkaos">instagram</a> ·&nbsp;
        <a href="https://open.spotify.com/user/olayinkaos">spotify</a> ·&nbsp;
        <a href="https://www.goodreads.com/user/show/48035339-olayinka-success">
          goodreads
        </a>
      </div>

      <div className="one-third column">
        <div className="text-right">
          &copy; yinka, {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
