
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;    
  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h5" color="error" className={classes.grow} style={{fontWeight: "bold"}}>
            <span color="inherit" onClick={() => navigate("/")}>GATSBY</span>
          </Typography>
          <Button color="inherit" onClick={() => navigate("/articles")}>Literature</Button>
          <Button color="inherit">News</Button>       
          <Button color="inherit">Organisation</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
