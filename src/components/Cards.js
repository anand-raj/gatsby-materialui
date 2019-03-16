import React from 'react';
import {navigate} from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import {Card, Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    cardGrid: {
        padding: `${theme.spacing.unit * 4}px 0`,
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
        cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      }
});

const articleList = ({ classes, cards }) => (
    <div className={classes.cardGrid}>
        <Grid container spacing={40}>
        {cards.map(card => (
        <Grid item key={card} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={"https://source.unsplash.com/150x150/?" + card.node.frontmatter.keywords} // eslint-disable-line max-len
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.node.frontmatter.title}
                </Typography>
                <Typography>
                    {card.node.excerpt}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(card.node.fields.slug)}>
                    Continue reading... 
                </Button>
                
            </CardActions>
            </Card>
        </Grid>
        ))}
    </Grid>
  </div>);

export default withStyles(styles)(articleList);