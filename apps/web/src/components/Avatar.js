import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GeoffreyPfp from '../images/geoffrey.png';

const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 100,
      height: 100,
    },
  };

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <>
      <div className={classes.row}>
        <Avatar
            src={GeoffreyPfp}
            className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    </>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);