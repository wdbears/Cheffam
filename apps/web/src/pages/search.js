import React from "react"
import MediaCard from "../components/FoodCategoryTile"
import { withStyles } from "@material-ui/core/styles"
import AmericanFood from "../images/american.jpg"
import HalalFood from "../images/halal.jpg"
import ItalianFood from "../images/italian.jpg"
import MalaysianFood from "../images/malaysian.jpg"
import IndianFood from "../images/indian.jpg"

const styles = {
    label: {textAlign: 'center', textDecoration: 'underline'}
}
const HomePage = ({ classes }) => <>
<div className={classes.label}>
    <h1>Categories</h1>
</div>
{[ {img: AmericanFood, text: "American"}, {img: HalalFood, text: "Halal"},  {img: ItalianFood, text: "Italian"},  {img: MalaysianFood, text: "Malaysian"},  {img: IndianFood, text: "Indian"}].map(({ img, text }, i) => <MediaCard key={i} imgSrc={img} textSrc={text} />)}
</>
export default withStyles(styles)(HomePage)