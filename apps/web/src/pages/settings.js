import React from "react"
import Avatar from "../components/Avatar";
import Profile from "../components/Profile";
import { withStyles } from '@material-ui/core/styles';
import SettingsList from "../components/SettingsList";
import Toggle from "../components/ChefModeToggle";

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

const SettingsPage = ({classes}) => (
    <div className="classes.page">
    <>
        <Avatar />
        <Profile />
        <SettingsList />
        <Toggle />
    </>
    </div>
)

export default withStyles(styles)(SettingsPage);