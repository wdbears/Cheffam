import React from "react"
import ImageAvatars from "../components/Avatar"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const styles = {
avatars: {paddingTop: 200},
itemWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
   }
}

const ChefProfile = ({classes, imgSrc, textSrc}) => <div>
    <ImageAvatars className = "classes.avatars" />
    <div className={classes.itemWrapper}>
    <Card className={classes.card}>
      <CardActionArea
        style={{ width: "100%", backgroundColor: "rgba(0,0,0,0)" }}
      >
        <CardMedia
          className={classes.media}
          style={{ display: "flex", justifyContent: "center" }}
          image={imgSrc}
        >
          <Typography className={classes.cardTitle}>{textSrc}</Typography>
        </CardMedia>
      </CardActionArea>
    </Card>
    </div>
</div>

export default withStyles(styles)(ChefProfile)
