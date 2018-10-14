import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from '@material-ui/core/CardContent'
import ProfileName from "../components/ProfileName";
import ImageAvatars from "../components/Avatar"

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
          title="Shrimp and Chorizo Paella"
        />
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Contemplative Reptile"
        />
      </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);