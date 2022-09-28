import React, { useState } from "react";
import Trades from "./components/trades";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import TradeForm from "./components/trades/TradeForm";
import SampleTradeList from "./components/SampleTradeList";
import "./App.css";

function App() {
  const [signInStatus, setSignInStatus] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });

  return (
    <div className="main">
      {signInStatus ? (
        <LogoutButton userData={userData} setSignInStatus={setSignInStatus} />
      ) : (
        <LoginButton setUserData={setUserData} setSignInStatus={setSignInStatus} />
      )}
      <br />
      <Profile userData={userData} />
      {signInStatus ? <Trades userData={userData} /> : <TradeForm />}
      {signInStatus ? <span /> : <SampleTradeList />}
    </div>
  );
}

export default App;
