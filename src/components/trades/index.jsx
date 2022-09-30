import React, { useState, useEffect } from "react";
import TradeForm from "./TradeForm";
import TradeList from "./TradeList";
import Chart from "./TheChart";
import axios from "axios";

function Trades(props) {
  const { userData } = props;
  const [tradeList, setTradeList] = useState([]);

  //test comment
  useEffect(() => {
    if (userData.name !== "") {
      axios
        .get("https://stock-journal-backend.herokuapp.com/", {})
        .then((res) => {
          const userTrades = res.data.filter((item) => {
            return item.user === userData.email;
          });
          setTradeList(userTrades);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData.email]);

  const deleteHandler = (id) => {
    axios
      .delete(`https://stock-journal-backend.herokuapp.com/trades/${id}`)
      .then((res) => {
        const newTrades = tradeList.filter((item) => {
          return item.id !== id;
        });
        setTradeList(newTrades);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <TradeForm tradeList={tradeList} setTradeList={setTradeList} userData={userData} />
      <Chart tradeList={tradeList} setTradeList={setTradeList} />
      <TradeList tradeList={tradeList} deleteHandler={deleteHandler} userData={userData} />
    </div>
  );
}

export default Trades;
