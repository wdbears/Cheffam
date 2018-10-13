import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AmericanFood from "../images/american.jpg"

const styles = {
  cardContainer: {
    textAlign:'center'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    width: 400,
    height: 400
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className="cardContainer">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={AmericanFood}
          title="American Food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            American
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);