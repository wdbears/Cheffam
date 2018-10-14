import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ChefCards from "./ChefCards"
import AmericanFood from "../images/american.jpg"
import HalalFood from "../images/halal.jpg"
import ItalianFood from "../images/italian.jpg"
import MalaysianFood from "../images/malaysian.jpg"
import IndianFood from "../images/indian.jpg"

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 100,
    paddingRight: 100
  },
  Grid: {
    alignItems: "center",
    justify: "center"
  }
})

function CenteredGrid(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        {[
          { img: AmericanFood, text: "Chef Bob" },
          { img: HalalFood, text: "Chef Ahmad" },
          { img: ItalianFood, text: "Brandon" },
          { img: MalaysianFood, text: "Jackie" },
          { img: IndianFood, text: "Indian" }
        ].map(({ img, text }, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
            <ChefCards key={i} imgSrc={img} textSrc={text} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenteredGrid)
