module.exports = {
  siteMetadata: {
    title: `Antoine Caron`,
    author: {
      name: `Antoine Caron`,
      summary: `who lives and works in Lyon (France) building useful things at Bedrock.`,
    },
    description: `Antoine Caron personal blog where you can read news about his open-source courses, packages.`,
    siteUrl: `https://slashgear.github.io`,
    repository: 'https://github.com/Slashgear/slashgear.github.io',
    social: {
      twitter: `Slashgear_`,
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-77930802-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antoine Caron`,
        short_name: `Antoine Caron`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `darkgrey`,
        display: `minimal-ui`,
        icon: `src/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-use-dark-mode',
  ],
}
