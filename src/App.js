import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Auth from './auth/Auth';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './notfound/NotFound';
import { connect } from "react-redux"
import { login, register } from "./store/actions/AuthActions"
import ReduxExample from './reduxexample/ReduxExample';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="App">
          <Switch>
            <Route exact path="/" render={(props) =>
              this.props.isLoggedIn ?
                <Home {...props} />
                :
                <Redirect to="/login" />
            }
            />
            <Route path="/login" render={(props) =>
              this.props.isLoggedIn ?
                <Redirect to="/" />
                :
                <Auth {...props}
                  onAuthButtonClicked={this.props.onLogin}
                  buttonText="Login"
                  headerText="Login to our amazing website /n It really is amazing"
                />
            }
            />
            <Route path="/register" render={(props) =>
              this.props.isLoggedIn ?
                <Redirect to="/" />
                :
                <Auth {...props}
                  onAuthButtonClicked={this.props.onRegister}
                  buttonText="Register"
                  headerText="Register in our amazing website /n It really is amazing"
                />
            }
            />
            <Route path="/example" render={(props) => <ReduxExample {...props}/>}/>
            <Route render={() => <NotFound />} />
          </Switch>
        </main>
       
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: credentials => dispatch(login(credentials)),
    onRegister: credentials => dispatch(register(credentials))
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
