import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <>
      <div className={classes.row}>
        <Avatar
            src="../images/geoffrey.png"
            className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
      <div className="name">
        Geoffrey the Giraffe
      </div>
      <div className="rating">
        <StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarBorderIcon />
      </div>
    </>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);