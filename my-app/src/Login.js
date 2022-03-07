import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
      showRegister: false,
      username: "",
      password: "",
    };
    console.log("farouq")
  }

  //Handles switch between
  handleClick = () => {
    console.log("this is:", this);
    if (this.state.showLogin == false) {
      this.setState({
        showLogin: true,
        showRegister: false,
      });
    } else {
      this.setState({
        showLogin: false,
        showRegister: true,
      });
    }
  };

  handleClick2 = () => {
    //Area where login button click is recognized
    //class's can be misleading, read plain text to identify components if confused
    // toast.success("🦄 Wow so easy!", {
    //   position: "top-left",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    Axios.post("http://localhost:5000/login", {
      username: this.state.username,
      password: this.state.password,
    }).then((response) => {
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
      setTimeout(() =>{window.open("/home");}, 3000)
      
    });
  };

  handleClick3 = () => {
    Axios.post("http://localhost:5000/register", {
      usernameSet: this.state.username,
      passwordSet: this.state.password,
    }).then((response) => {
      console.log(response);
    });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="centered">
        {this.state.showLogin ? (
          <div id="LoginBox" className="LoginCenter">
            <div className="LogInTest">Log in</div>
            <hr className="Line"></hr>
            <div className="spacer">Space</div>
            <div className="UserNameTest">Username</div>
            <div className="UserNameTest">
              <input
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">Password</div>
            <div className="UserNameTest">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">
              <button className="ButtonFormat" onClick={this.handleClick2}>
                Log In
              </button>
              <button className="ButtonFormat" onClick={this.handleClick}>
                Register
              </button>
            </div>
          </div>
        ) : null}
        {this.state.showRegister ? (
          <div id="LoginBox" className="LoginCenter">
            <div className="LdisogInTest">Register</div>
            <hr className="Line"></hr>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">Email</div>
            <div className="UserNameTest">
              <input></input>
            </div>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">Username</div>
            <div className="UserNameTest">
              <input
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">Password</div>
            <div className="UserNameTest">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="spacer2">Space</div>
            <div className="UserNameTest">
              <button className="ButtonFormat" onClick={this.handleClick3}>
                Register
              </button>
              <button className="ButtonFormat" onClick={this.handleClick}>
                Cancel
              </button>
            </div>
          </div>
        ) : null}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default LoginComponent;