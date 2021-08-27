import React from 'react';
import Trade from './Trade';
import { useAuth0 } from '@auth0/auth0-react';

function TradeList(props) {
    const {user, isAuthenticated} = useAuth0()

    const userTrades = props.tradeList.filter(item => {
        return item.user === user.email
    })
    const goodTrades = userTrades.filter(item => {
        return item.profitLoss>0
    })
    const badTrades = userTrades.filter(item => {
        return item.profitLoss<0
    })
    const amounts = userTrades.map(trade => trade.profitLoss)
    const totalProfitLoss =  amounts.reduce((acc, item) => (acc +=item),0)
    const successRate = (goodTrades.length/(goodTrades.length + badTrades.length))*100
   // console.log(userTrades)   

    return(
        isAuthenticated && (
            <div>
                <p>Success Rate  {successRate.toFixed(2)}%</p>
                <span>Total Profit(P) {totalProfitLoss}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Stock</td>
                            <td>Method</td>
                            <td>Quantity</td>
                            <td>P/L</td>
                            <td className='td-blank'></td>
                        </tr>
                    </tbody>
                    
                </table>
                { userTrades.map(trade => {
                    return <Trade key={trade.id} trade={trade} deleteHandler={props.deleteHandler} />
                }) }
                <p></p>
            </div>
        )
    )
}

export default TradeList;