import React from "react"
import GridLayout from "../components/ChefGridLayout";
import { withStyles } from "@material-ui/core/styles"

const styles = {
    greeting: {textAlign: 'center'}
}

const OrderPage = ({ classes }) => <>
<div className={classes.greeting}>
    <h1>Welcome to Cheffam</h1>
    <h4>A freelance cook's dream.</h4>
    <GridLayout />
</div>
</>

export default withStyles(styles)(OrderPage)
