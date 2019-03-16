import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Cards from './Cards';

export default () => (
 <StaticQuery
        query = { graphql `query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
            node {
                fields {
                    slug
                }
                id
                frontmatter {
                title
                image
                keywords
                date(formatString: "MMMM YYYY")
                }
                excerpt
            }
            }
        }
        }`
        }

        render = { data => {
            console.log(data.allMarkdownRemark.edges)
            return(<Cards cards={data.allMarkdownRemark.edges} />)
        } }
/>);