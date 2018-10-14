import React from "react"
import ImageAvatars from "../components/Avatar"
import { withStyles } from "@material-ui/core/styles"

const styles = {
avatars: {paddingTop: 200}
}

const ChefProfile = () => <div>
    <ImageAvatars className = "classes.avatars" />
</div>

export default withStyles(styles)(ChefProfile)
