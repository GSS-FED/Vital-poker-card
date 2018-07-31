import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Imgstyle = {
  width: '300px',
}

const Header = ({ siteTitle, headerImage }) => (
  <div
    style={{
      background: `linear-gradient(to right, red , yellow)`,
      background: `grey`,
      marginBottom: '1.45rem',
    }}
  >
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={headerImage.sizes}

      // backgroundColor={"pink"}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
