import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Profile from "../components/Profile";
import SettingsList from "../components/SettingsList";

const styles = {
page: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const SettingsPage = ({classes}) => (
    <div className="classes.page"><Profile /><SettingsList /></div>
)

export default withStyles(styles)(SettingsPage);