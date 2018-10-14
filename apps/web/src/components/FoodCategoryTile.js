import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AmericanFood from "../images/american.jpg"

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}

function MediaCard({ classes }) {
  return (
    <Card className={classes.card}>
      <CardActionArea style={{ width: "100%" }}>
        <CardMedia
          className={classes.media}
          style={{ display: "flex", justifyContent: "center" }}
          image={AmericanFood}
          title="Contemplative Reptile"
        >
          <Typography style={{ alignSelf: "center" }}>Yoooo</Typography>
        </CardMedia>
      </CardActionArea>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
