import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ChefCards from "./ChefCards"
import AmericanFood from "../images/homemadesteak.jpg"
import Mac from "../images/americanhomemade.jpg"
import MalaysianFood from "../images/malaysian.jpg"
import IndianFood from "../images/indian.jpg"
import KoreanFood from "../images/korean.jpg"
import ChineseFood from "../images/chinese.jpg"
import JapaneseFood from "../images/japanese.jpg"
import VietFood from "../images/vietnamese.jpg"

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
          { img: MalaysianFood, text: "Chef Ahmad" },
          { img: VietFood, text: "Chef Bob" },
          { img: KoreanFood, text: "Chef Bob" },
          { img: ChineseFood, text: "Chef Bob" },
          { img: Mac, text: "Brandon" },
          { img: JapaneseFood, text: "Jackie" },
          { img: IndianFood, text: "Indian" }
        ].map(({ img, text }, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <ChefCards imgSrc={img} textSrc={text} />
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
