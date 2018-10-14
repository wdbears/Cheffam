import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChefCards from './ChefCards';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 100,
    paddingRight: 100
  },
  Grid: {
    alignItems: "center",
    justify: "center"
    },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={40} xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={6} sm={3}>
            <ChefCards />
        </Grid>
        <Grid item xs={6} sm={3}>
            <ChefCards />
        </Grid>
        <Grid item xs={6} sm={3}>
            <ChefCards />
        </Grid>
        <Grid item xs={6} sm={3}>
            <ChefCards />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
