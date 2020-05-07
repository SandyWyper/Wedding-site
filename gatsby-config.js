module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Stellar by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Stellar by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jenny+Sandy',
        short_name: 'Jenny+Sandy',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        // display: 'minimal-ui',
        display: 'fullscreen',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
