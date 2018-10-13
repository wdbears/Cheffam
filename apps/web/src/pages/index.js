import React from "react"
import { Switch, Route } from "react-router"
import HomePage from "./home"
import OrderPage from "./orders"
import SettingsPage from "./settings"
import CategoryPage from "./categoryfood"
export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/orders" component={OrderPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/categoryfood" component={CategoryPage} />
  </Switch>
)
