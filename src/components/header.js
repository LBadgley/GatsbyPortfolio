import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#04724D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        marginLeft: `200px`
      }}
    >
      <h1 id="titleH1" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginTop: `1.5rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ marginTop: `1rem`, marginLeft: `2rem`}}>
        <Link
          to="/about"
          style={{
            margin: `1em`,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          A little about me..
        </Link>
        <Link
          to="projects"
          style={{
            margin: `1em`,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
        <Link
          to="contact"
          style={{
            margin: `1em`,
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
