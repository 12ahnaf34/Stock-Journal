import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function TradeForm(props) {
    const newDate = new Date()
    const date = (newDate.getMonth()+1)+'-'+newDate.getDate()+'-'+newDate.getFullYear()+'-'+newDate.getHours()+'.'+newDate.getMinutes()+'.'+newDate.getSeconds()+'.'+newDate.getMilliseconds()

    const [stock, setStock] = useState()
    const [method,setMethod] = useState()
    const [quantity, setQuantity] = useState()
    const [profitLoss, setProfitLoss] = useState()
    const {user, isAuthenticated} = useAuth0()


    const handleStock = e => {
        setStock(e.target.value)     
    }
    const handleMethod = e => {
        setMethod(e.target.value)
    }
    const handleQuantity = e => {
        setQuantity(e.target.value)
    }
    const handleProfitLoss = e => {
        setProfitLoss(e.target.value)
    }

    const handleSubmit = e => {
        
        e.preventDefault()
        if(!isAuthenticated){
            return alert('You must Login before adding a trade.')
        }
        const newTrade = [{
            id:date,
            user:user.email,
            stock:stock,
            method:method,
            quantity:parseInt(quantity),
            profitLoss:parseFloat(profitLoss)
        }]
        if(isAuthenticated){
            axios.post('http://localhost:8888/trades', newTrade)
            .then(res => {
                console.log(res)   
            })
            props.setTradeList([ ...newTrade, ...props.tradeList])
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <p className='formLabel-buffer'></p>

            <input value={stock} placeholder='Stock'  onChange={handleStock} type='text' />
            <input value={method} placeholder='Method' onChange={handleMethod} type='text' />
            <input value={quantity} placeholder='Share Quantity' onChange={handleQuantity} type='number' min='1' step='1' />
            <input value={profitLoss} placeholder='Profit/Loss' onChange={handleProfitLoss} type='number' step='0.25' />

            <button type='submit'>+Trade</button>
        </form>  
    )
}

export default TradeForm;