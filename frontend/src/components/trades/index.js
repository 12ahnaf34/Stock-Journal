import React, { useState, useEffect } from 'react';
import TradeForm from './TradeForm';
import TradeList from './TradeList';
import Chart from './Chart';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


function Trades() {
    const [tradeList, setTradeList] = useState([])
    const {isAuthenticated, user} = useAuth0()

   
    useEffect(() => {  
        axios.get('http://localhost:8888/trades', {})
            .then(res => {
                const userTrades = res.data.filter(item => {
                    return item.user === user.email
                })
                setTradeList(userTrades)
            })
            .catch(err => {
                console.log(err)
            })                     
    }, [])

    const deleteHandler = id => {
        axios.delete(`http://localhost:8888/trades/${id}`)
            .then(res => {
                const newTrades = tradeList.filter(item => {
                    return item.id !== id
                })
                setTradeList(newTrades)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(  
        <div>
            <TradeForm tradeList={tradeList} setTradeList={setTradeList} />
            <Chart tradeList={tradeList} />
            <TradeList tradeList={tradeList} deleteHandler={deleteHandler} />
        </div>              
    )
}

export default Trades;