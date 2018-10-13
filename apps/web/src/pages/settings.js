import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Profile from "../components/Profile";
import SettingsList from "../components/SettingsList";

const styles = {
html: {
    display: 'flex',
    paddingTop: 100
 }
}

const SettingsPage = ({classes}) => (
    <div className="pageContainer">
    <>
        <Profile />
        <SettingsList />
    </>
    </div>
)

export default withStyles(styles)(SettingsPage);