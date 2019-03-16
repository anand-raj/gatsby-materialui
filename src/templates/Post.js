import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TurndownService from 'turndown';
import Layout from '../components/Layout';
import Markdown from './Markdown';

const turndownService = new TurndownService();

const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  }
});

const Post = ({ data, classes }) => {
  const post = data.markdownRemark
  console.log(post.html.toString())
  return (
    <Layout>
      <Typography gutterBottom variant="h4">{post.frontmatter.title}</Typography>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div>
      <Markdown className={classes.markdown}>
        {turndownService.turndown(post.html)}
      </Markdown>
    </Layout>
  )
}

export default withStyles(styles)(Post);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`