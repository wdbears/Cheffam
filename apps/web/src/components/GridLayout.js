import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Media from "react-media";
import ChefCards from './ChefCards';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  Grid: {
    justifyContent: "center"
    },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      <Media query="(max-width:375px)">
      {matches => matches ? (
        <Grid item xs={6}>
            <ChefCards />
        </Grid> ) : ( 
        <Grid item xs={2}>
          <ChefCards />
        </Grid>
        )
      }
      </Media>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
