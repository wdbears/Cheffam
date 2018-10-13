import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'; 
import ChefCards from '../components/ChefCards';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    textAlign: 'center',
    height: 200,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
            <ChefCards />
        </Grid>
        <Grid item xs={6}>
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
