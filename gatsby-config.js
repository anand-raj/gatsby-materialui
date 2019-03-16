module.exports = {
    pathPrefix: "/gatsby-materialui",

    siteMetadata: {
        title: 'Gatsby blog',
    },
    
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-material-ui',        
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'files',
              path: `${__dirname}/src/markdown`,
            },
        },
        'gatsby-transformer-remark'
    ]
}