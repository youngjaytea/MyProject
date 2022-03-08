import "./App.css";
import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { AddChild } from "./addchild";
import { toast } from "react-toastify";
import Axios from "axios";
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
      password: "",
    };
  }
  handleClick2 = () => {
    Axios.post("http://localhost:5000/login", {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
      this.setState({ isSignedIn: true });
      console.log(response);
      if (response.data.message) {
        console.log(response.data.message);
        toast.error(response.data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log(response.data[0]);
        toast.success(` Welcome ${response.data}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setTimeout(() => {
        window.open("/home");
      }, 3000);
    });
  };
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <LoginComponent
                    comp={this.state}
                    handleClick={this.handleClick2}
                  />
                }
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
