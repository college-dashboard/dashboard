import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Components/Header'
import Main from './Components/Main'

class App extends Component {
  render() {
      return (
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      )
  }
}

const mapStateToProps = state => {
  return {
    auth:state.auth
  }
}

export default withRouter(connect(mapStateToProps)(App));
