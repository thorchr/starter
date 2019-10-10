import React from 'react'
import footerStyles from './footer.module.scss'


const Footer = () => {
	return (
	 	<footer className={footerStyles.footer}>


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
	 	<p style={{ margin: 0 }}>

	 		Created by Thor Christian Nilsen
          © {new Date().getFullYear()}, Built with
          {` `}
          
          <a href="https://www.gatsbyjs.org">Gatsby</a>
         </p> 
         </div> 
        </footer>
	)
}

export default Footer