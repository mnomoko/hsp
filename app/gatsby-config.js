let env = process.env.NODE_ENV || 'development';
const url = process.env.GATSBY_STRAPI_URL || 'http://localhost:1337';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  siteMetadata: {
    title: `HSP`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: url,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `about`,
          `client`,
          `mission`,
          `service`
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff8e00`,
        theme_color: `#FF8E00`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        // sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /.*\.module\.s(a|c)ss$/,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
