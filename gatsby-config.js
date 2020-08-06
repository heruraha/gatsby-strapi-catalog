module.exports = {
  siteMetadata: {
    title: `strapi-product-catalog`,
    author: `V Yaymayan`,
    description: `Gatsby product catalog starter with a Strapi backend`,
    siteUrl: process.env.SITE_URL,
    socialMedia: {
      facebook: `https://facebook.com/{{username}}`,
      twitter: `https://twitter.com/{{username}}`,
      instagram: `https://instagram.com/{{username}}`,
      etsy: `https://etsy.com/{{username}}`,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000,
        contentTypes: [`products`, `categories`, `orders`],
        singleTypes: [`contact`],
      },
    },
  ],
}
