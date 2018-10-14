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
  app: {display: 'flex', minHeight: '100vh', flexDirection: 'column'},
  navbar: { flex: 1 }
}

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <header></header>
        {console.log(this.props.classes)}
        <main className={this.props.classes.navbar}>
        <ApolloProvider client={client}>
          <Router className="wrapper">
              <>  {/* React fragment used for storing multiple components */}
              <CssBaseline />
              <Pages />
              </>
            </Router>
        </ApolloProvider></main>
        <footer>
              <BottomNav className={this.props.classes.navbar}/>
            </footer>
      </div>
    )
  }
}

export default withStyles(styles)(App);