module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aqilsidek.com",
    title: "Portfolio V2",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      }
    }, 
    
    `gatsby-plugin-styled-components`, `gatsby-plugin-fontawesome-css`],
};