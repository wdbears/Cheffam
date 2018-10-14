import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"


const styles = theme => ({
  card: {
    boxShadow: theme.shadows[6]
  },
  media: {
    height: 150
  },
  cardTitle: {
    color: "white",
    fontSize: 26,
    alignSelf: "center"
  }
})

function MediaCard({ classes, imgSrc, textSrc }) {
  return (
    <Card className={classes.card}>
      <CardActionArea
        style={{ width: "100%"}}
        component={Link}
        label="Chef List"
        to="/chefList">
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
