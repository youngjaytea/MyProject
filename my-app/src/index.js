import "./App.css";
import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { AddChild } from "./addchild";
import LoginComponent from "./Login";
import Bathroom from "./bathroom";
import SleepLog from "./sleeplog";
import Feeding from "./Eating";
import ImportantEntries from "./importantEntries";
import ProctedRoute from "./component/ProtectedRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      username: "",
    };
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={<LoginComponent comp={this.state} />}
              />

              <Route
                path="/home"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <Main />
                  </ProctedRoute>
                }
              />
              <Route
                path="/addnewchild"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <AddChild />
                  </ProctedRoute>
                }
              />
              <Route
                path="/bathroom"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <Bathroom />
                  </ProctedRoute>
                }
              />
              <Route
                path="/eating"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <Feeding />
                  </ProctedRoute>
                }
              />
              <Route
                path="/sleeping"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <SleepLog />
                  </ProctedRoute>
                }
              />
              <Route
                path="/important"
                element={
                  <ProctedRoute isSignedIn={this.state.isSignedIn}>
                    <ImportantEntries />
                  </ProctedRoute>
                }
              />
            </Routes>
          </div>
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
