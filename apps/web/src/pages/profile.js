import React from "react"
import Avatar from "../components/Avatar";
import ProfileName from "../components/ProfileInfo";
import { withStyles } from '@material-ui/core/styles';
import SettingsList from "../components/SettingsList";
import Toggle from "../components/ChefModeToggle";

const styles = {
    page: {
        paddingTop: 30
      },
      chefToggle: {
          paddingTop:30,
          textAlign:'center'
      },
      application: {
          textAlign: 'center'
      }
    }

const ProfilePage = ({classes}) => (
    <div className={classes.page}>
    <>
        <Avatar />
        <ProfileName />
        <SettingsList />
        <div className={classes.chefToggle}>
        <Toggle />
        </div>
        <div className={classes.application}>
          Application for Chef Role is coming soon!
        </div>
    </>
    </div>
)

export default withStyles(styles)(ProfilePage);