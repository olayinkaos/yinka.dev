import React from 'react'
import { Link } from 'gatsby'

export default ({ contents }) => (
  <ul className="content-list blog-content-list">
    {contents.map(c => {
      const link = c.link.includes('http') ? (
        <a href={c.link}>{c.title}</a>
      ) : (
        <Link to={c.link}>{c.title}</Link>
      )
      return (
        <li key={c.key}>
          <h5 className="title">{link}</h5>
          <p
            dangerouslySetInnerHTML={{
              __html: c.description,
            }}
          />
          <p className="subtitle">
            <small>{c.subtitle}</small>
          </p>
        </li>
      )
    })}
  </ul>
)
