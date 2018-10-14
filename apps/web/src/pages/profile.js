import React from "react"
import Avatar from "../components/Avatar";
import ProfileName from "../components/ProfileName";
import { withStyles } from '@material-ui/core/styles';
import SettingsList from "../components/SettingsList";
import Toggle from "../components/ChefModeToggle";

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

const ProfilePage = ({classes}) => (
    <div className="classes.page">
    <>
        <Avatar />
        <ProfileName />
        <SettingsList />
        <Toggle />
    </>
    </div>
)

export default withStyles(styles)(ProfilePage);