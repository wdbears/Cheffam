import React from "react"
import Profile from "../components/Profile";
import SettingsList from "../components/SettingsList";
import Toggle from "../components/Toggle";


const SettingsPage = ({classes}) => (
    <div className="pageContainer">
    <>
        <Profile />
        <SettingsList />
        <Toggle />
    </>
    </div>
)

export default (SettingsPage);