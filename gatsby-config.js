const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Envato Design Resources`,
    description: `Logos, Colors, and UI libraries to help you design for Envato.`,
    author: `envato`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `envato-design`,
        short_name: `envato`,
        start_url: `/`,
        background_color: `#80B341`,
        theme_color: `#80B341`,
        display: `minimal-ui`,
        icon: `src/images/envato-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        styles: path.join(__dirname, "src/styles"),
        static: path.join(__dirname, "src/static"),
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-styled-components`,
  ],
}
