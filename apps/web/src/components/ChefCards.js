import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import { withStyles } from "@material-ui/core/styles"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardHeader from "@material-ui/core/CardHeader"
import ImageAvatars from "../components/Avatar"
import ProfileInfo from "./ProfileInfo"
import { Link } from "react-router-dom"


const styles = {
  card: {
    // maxWidth: 345,
    // minWidth: 210
  },
  media: {
    height: 140
  },
  cardTitle: {
    color: "white",
    fontSize: 14,
    alignSelf: "center"
  }
}

function MediaCard({ classes, imgSrc, textSrc}) {
  return (
    <Card className={classes.card}>
    <CardActionArea style={{ width: "100%"}}
    component={Link}
    label="Chef Profile"
    to="/chefProfile">
      <CardHeader avatar={<ImageAvatars />} title={<ProfileInfo name={textSrc} />} />
      <CardMedia className={classes.media} image={imgSrc} />
      </CardActionArea>
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
