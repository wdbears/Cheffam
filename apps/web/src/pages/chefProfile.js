import React from "react"
import ImageAvatars from "../components/Avatar"
import { withStyles } from "@material-ui/core/styles"
import MediaCard from "../components/FoodCategoryTile"
const styles = {
avatars: {paddingTop: 200},
itemWrapper: {  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   }
}

const ChefProfile = ({classes}) => <div>
    <ImageAvatars className = "classes.avatars" />
    <div className={classes.itemWrapper}>
    <MediaCard />
    </div>
</div>

export default withStyles(styles)(ChefProfile)
