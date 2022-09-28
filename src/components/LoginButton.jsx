import React from "react";
import { firebase } from "../firebase";
import "firebase/auth";

function LoginButton(props) {
  const { setUserData, setSignInStatus } = props;

  const signIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        setSignInStatus(true);
        setUserData({ name: res.user.displayName, email: res.user.email });
      });
  };

  return (
    <button className="btn-login" onClick={signIn}>
      Log In
    </button>
  );
}

export default LoginButton;
