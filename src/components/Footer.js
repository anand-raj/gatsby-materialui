import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
  </footer>);

export default withStyles(styles)(footer);