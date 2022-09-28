import React from "react";
import { firebase } from "../firebase";
import "firebase/auth";

function LogoutButton(props) {
  const { userData, setSignInStatus } = props;

  const signOut = () => {
    setSignInStatus(false);
    firebase.auth().signOut();
  };

  return (
    <div className="header">
      <span className="user-name">{userData.name}</span>
      <div className="btn-div">
        <button className="btn-login" onClick={signOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default LogoutButton;
