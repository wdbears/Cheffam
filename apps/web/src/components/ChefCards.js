import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from "@material-ui/core/CardHeader";
import ImageAvatars from "../components/Avatar"
import ProfileInfo from './ProfileInfo';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 210,
  },
  media: {
    height: 140,
  },
  cardTitle: {
    color: 'white',
    fontSize: 14,
    alignSelf: "center"
  }
};

function MediaCard({ classes, imgSrc}) {
  return (
    <Card className={classes.card}>
        <CardHeader
          avatar={
            <ImageAvatars />
          }
          title={<ProfileInfo/>}
        />
        <CardMedia
          className={classes.media}
          image={imgSrc}
        />
      </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);