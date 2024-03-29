module.exports = {
  siteMetadata: {
    title: `Øreåsen borettslag`,
     description: `et godt sted å bo`,
     author: `TCN`,
     menuLinks:[
        {
          name:'Hjem',
          link:'/'
        },
        {
          name:'blog',
          link:'/blog'

        },
        {
          name:'om',
          link:'/about'

        },
        {
          name:'kontakt',
          link:'/contact'

        }
      ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
   
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
               'gatsby-remark-relative-images',
               {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 960,
                        linkImagesToOriginal: false
                    }
               }
          ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
