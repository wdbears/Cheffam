import React from "react"
import Avatar from "../components/Avatar";
import Profile from "../components/Profile";
import SettingsList from "../components/SettingsList";
import Toggle from "../components/Toggle";


const SettingsPage = ({classes}) => (
    <div className="pageContainer">
    <>
        <Avatar />
        <Profile />
        <SettingsList />
        <Toggle />
    </>
    </div>
)

export default (SettingsPage);