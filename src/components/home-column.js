import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function HomeColumn({ title, items, viewMoreLink }) {
  return (
    <div className="one-third column">
      <h4>{title}</h4>

      <ul className="content-list">
        {items.map(item => {
          const link = item.titleLink.includes('http') ? (
            <a href={item.titleLink}>{item.title}</a>
          ) : (
            <Link to={item.titleLink}>{item.title}</Link>
          )
          return (
            <li key={item.title}>
              {link}
              <p className="subtitle">
                <small>{item.subtitle}</small>
              </p>
            </li>
          )
        })}
      </ul>

      <p>
        <Link to={viewMoreLink}>view more →</Link>
      </p>
    </div>
  )
}

HomeColumn.defaultProps = {
  items: [],
}

HomeColumn.propTypes = {
  title: PropTypes.string,
  viewMoreLink: PropTypes.string,
  items: PropTypes.array,
}

export default HomeColumn
