import React from "react"
import { Switch, Route } from "react-router"
import HomePage from "./home"
import OrderPage from "./orders"
import ProfilePage from "./profile"
import Search from "./search"
import ChefProfile from "./chefProfile"
import ChefList from "./chefList"

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/orders" component={OrderPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/search" component={Search} />
    <Route path="/chefProfile" component={ChefProfile} />
    <Route path="/chefList" component={ChefList} />
  </Switch>
)
