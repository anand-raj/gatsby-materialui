import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Footer from './Footer.js';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    }
  });

const Layout = ({ children, classes }) => (
    <React.Fragment>
        <CssBaseline />
        <AppBar />
        <br />
        <div className={classes.layout}>
            {children}          
        </div>
        <Footer />
    </React.Fragment>
)

export default withStyles(styles)(Layout);

