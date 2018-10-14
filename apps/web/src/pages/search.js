import React from "react"
import { withStyles } from "@material-ui/core/styles"
import CategoryGridLayout from "../components/CategoryGridLayout"

const styles = {
  label: { textAlign: "center", textDecoration: "underline" }
}
const OrderPage = ({ classes }) => <>
    <CategoryGridLayout />
</>
export default withStyles(styles)(OrderPage)

