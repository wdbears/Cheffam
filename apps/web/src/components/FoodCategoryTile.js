import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"



const styles = {
  card: {
    maxWidth: 345,
    margin: 75,
    opacity: 0.875
    },
  media: {
    height: 140
  },
  cardTitle: {
    color: 'white',
    fontSize: 26,
    alignSelf: "center"
  }
}

function MediaCard({ classes, imgSrc, textSrc }) {
  return (
    <Card className={classes.card}>
      <CardActionArea style={{ width: "100%" }}>
        <CardMedia
          className={classes.media}
          style={{ display: "flex", justifyContent: "center" }}
          image={imgSrc}
          title="Contemplative Reptile"
        >
          <Typography className={classes.cardTitle}>{textSrc}</Typography>
        </CardMedia>
      </CardActionArea>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
