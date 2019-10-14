import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.scss'


const Header = ({ siteTitle, menuLinks, description}) => (
  <header
    style={{
      background: `beige`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
       <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
      <h1 className={headerStyles.h1}>
        <Link className={headerStyles.link}
          to="/" >
          {siteTitle}

        </Link>
      </h1>
           <div>
          <nav>
            <ul style={{ display: "flex", flex: 1, }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,

                  }}
                >
                  <Link style={{  color:`chocolate`, textDecoration: `none`,}} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
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
