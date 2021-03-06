import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeIcon from "@material-ui/icons/Home"
import ReceiptIcon from "@material-ui/icons/Receipt"
import PersonIcon from "@material-ui/icons/Person"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "react-router-dom"

const styles = {}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          label="Home"
          icon={<HomeIcon />}
          to="/"
        />
        <BottomNavigationAction
          component={Link}
          label="Search"
          icon={<SearchIcon />}
          to="/search"
        />
        <BottomNavigationAction
          component={Link}
          label="Orders"
          icon={<ReceiptIcon />}
          to="/orders"
        />
        <BottomNavigationAction
          component={Link}
          label="Profile"
          icon={<PersonIcon />}
          to="profile"
        />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleBottomNavigation)
