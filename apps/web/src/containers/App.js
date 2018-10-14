import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import { withStyles } from '@material-ui/core/styles';
import Router from "react-router-dom/BrowserRouter"
import initApollo from "../lib/initApollo"
import Pages from "../pages"
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNav from '../components/BottomNav';

const client = initApollo()

const styles = {
  app: {paddingTop: 20, position: 'relative'},
  navbar: {bottom:0},
  
}

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <ApolloProvider client={client}>
          <Router>
            <>  {/* React fragment used for storing multiple components */}
            <CssBaseline />
            <Pages />
            <div className={this.props.classes.wrapper}>
              <BottomNav className={this.props.classes.navbar}/>
            </div>
            </>
          </Router>
        </ApolloProvider>
      </div>
    )
  }
}

export default withStyles(styles)(App);