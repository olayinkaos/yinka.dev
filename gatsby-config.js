// Load environment variables
require('dotenv').config()

// Load Contentful config from environment variables
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided. ' +
    'Please set CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN environment variables.'
  )
}

module.exports = {
  siteMetadata: {
    title: `olayinka omole · software developer`,
    description: `I'm olayinka omole, a software developer. I spend most of my time building and maintaining software that make people's lives easier.`,
    author: `olayinkaos`,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE || 'LOCAL',
      },
    },
  ],
}
