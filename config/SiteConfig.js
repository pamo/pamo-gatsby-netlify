module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'likescoffee', // Navigation and Site Title
  siteTitleAlt: "Pamela Ocampo's Blog", // Alternative Site title for SEO
  siteUrl: 'https://likescoffee.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/social/pam-brewing.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteLogo: '/social/pam-brewing.jpg', // Image for schemaORGJSONLD
  siteDescription: "Pamela Ocampo's blog", // Your site description
  author: 'Pamela Ocampo', // Author for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@pmocampo', // Twitter Username - Optional
  ogSiteName: 'likescoffee', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.js
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',
};
