import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "../assets/loginButton.css";

export default class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div className="container-btn">
        <div className="oauth">
          <GoogleLogin
            clientId="1095632648438-foi4hg6j6b9m3dmlep91l82epm7msj9f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="515578389551296"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={this.responseFacebook}
          />
        </div>
        <p>
          Belum Memiliki Akun?{" "}
          <a href="#" className="daftarakun">
            Daftar
          </a>
        </p>
      </div>
    );
  }
}
