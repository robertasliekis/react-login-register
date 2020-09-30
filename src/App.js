import React from "react";
import "./App.css";

import { connect } from "react-redux";

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import UserInfo from "./components/UserInfo";
import EditUserInfo from "./components/EditUserInfo";
import WrongPage from "./components/WrongPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="website-wrapper">
            <Header />
            <div className="main-content">
              <Switch>
                <Route exact path="react-login-register/" component={Login} />
                <Route path="react-login-register/register" component={Register} />
                <Route path="react-login-register/user" component={UserInfo} />
                <Route path="react-login-register/edit" component={EditUserInfo} />
                <Route path="react-login-register/about" component={About} />
                <Route path="*" component={WrongPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.isLoggedIn.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
