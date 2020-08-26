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
    resumeUrl: "https://bit.ly/2CjRVmV",
    twitterHandle: "hoshkitsunoda",
    url: "http://hoshki.me",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-project`,
        path: `${__dirname}/src/markdown/project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog`,
        path: `${__dirname}/_posts/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-images`,
        path: `${__dirname}/src/images/project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-plugin-netlify-cms-paths`],
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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158770402-2",
        head: false,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "hoshki.me",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "hoshki.me",
              separator: "|",
              author: "Hosh'ki Tsunoda",
              background: require.resolve("./src/images/card-background.png"),
              fontColor: "#011a27",
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: "monospace",
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
