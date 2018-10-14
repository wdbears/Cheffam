import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GeoffreyPfp from '../images/geoffrey.png';
import GeoffreyPfp1 from '../images/geoffrey2.png';
import GeoffreyPfp2 from '../images/geoffrey3.jpg';
import GeoffreyPfp3 from '../images/geoffrey4.jpg';
import GeoffreyPfp4 from '../images/geoffrey5.jpg';
import GeoffreyPfp5 from '../images/geoffrey6.jpg';
import GeoffreyPfp6 from '../images/geoffrey7.jpg';


const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
    smallAvatar: {
      width: 75,
      height: 75
    }
  };

function ImageAvatars(props) {
  const { classes } = props;
  const array = [GeoffreyPfp,GeoffreyPfp1, GeoffreyPfp2, GeoffreyPfp3, GeoffreyPfp4, GeoffreyPfp5, GeoffreyPfp6];
  const random = Math.floor(Math.random() * 6);
  return (
      <>
      <div className={classes.row}>
        <Avatar
            src={array[random]}
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