import React from "react"
import { Switch, Route } from "react-router"
import HomePage from "./home"
import OrderPage from "./orders"
import SettingsPage from "./settings"
import Search from "./search"
export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/orders" component={OrderPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/search" component={Search} />
  </Switch>
)
