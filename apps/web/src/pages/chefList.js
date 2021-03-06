import React from "react"
import GridLayout from "../components/ChefGridLayout"
import { withStyles } from "@material-ui/core/styles"
import Logo from "../logo.svg"
const styles = {
  appLogo: { width: 50, paddingTop: 20 },
  greeting: { textAlign: "center" }
}

const HomePage = ({ classes }) => (
  <>
    <div className={classes.greeting}>
      <img src={Logo} className={classes.appLogo} alt="logo" />
      <h1>Category</h1>
    </div>
    <div>
      <GridLayout className={classes.chefGrid} />
    </div>
  </>
)

export default withStyles(styles)(HomePage)
