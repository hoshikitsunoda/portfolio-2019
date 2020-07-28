module.exports = {
  siteMetadata: {
    title: `Hosh'ki Tsunoda`,
    description: `Portfolio`,
    author: `Hosh'ki Tsunoda`,
    socialLinks: [
      "mailto: contact@hoshki.me",
      "https://github.com/hoshikitsunoda",
      "https://www.linkedin.com/in/hoshki-tsunoda/",
      "https://twitter.com/hoshkitsunoda",
    ],
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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFD64D`,
        theme_color: `#FFD64D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
