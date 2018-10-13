import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AmericanFood from "../images/american.jpg"
const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'center'
        },
    card: {width: '400px', height: '200px'},
  media: {
    height: 140,
    padding: 100
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
      <div className="cardContainer">
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={AmericanFood}
          title="American Food"
        />
    </Card>
    </div>  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);