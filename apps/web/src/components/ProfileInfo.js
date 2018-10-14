import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = {
    row: {
      paddingTop:15,
      display: 'flex',
      align: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      textAlign: 'center',
      paddingBottom: 30
    }
  };

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <>
      <div className={classes.row}>
      </div>
      <div className={classes.wrapper}>
      <div className="name">
        Geoffrey the Giraffe
      </div>
      <div className="rating">
        <StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarBorderIcon />
      </div>
      </div>
    </>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);