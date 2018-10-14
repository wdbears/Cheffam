import React from "react"
import MediaCard from "../components/FoodCategoryTile"
import { withStyles } from "@material-ui/core/styles";
import AmericanFood from "../images/american.jpg"
import HalalFood from "../images/halal.jpg"

const styles = {
    label: {textAlign: 'center', textDecoration: 'underline'}
}

const HomePage = ({ classes }) => <>
<div className={classes.label}>
    <h1>Categories</h1>
</div>
{[ {img: AmericanFood, text: "American"}, {img: HalalFood, text: "Halal"} ].map(({ img, text }) => <MediaCard imgSrc={img} textSrc={text} />)}
</>


export default withStyles(styles)(HomePage)
