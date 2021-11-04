import React from 'react';
import { Line } from 'react-chartjs-2';

function Chart(props){
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const newDate = new Date()
    const janProfits = props.tradeList.filter(item => {
        return item.id[0] === '1' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const janTotalProfits = janProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const febProfits = props.tradeList.filter(item => {
        return item.id[0] === '2' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const febTotalProfits = febProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const marProfits = props.tradeList.filter(item => {
        return item.id[0] === '3' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const marTotalProfits = marProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const aprProfits = props.tradeList.filter(item => {
        return item.id[0] === '4' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const aprTotalProfits = aprProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const mayProfits = props.tradeList.filter(item => {
        return item.id[0] === '5' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const mayTotalProfits = mayProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const junProfits = props.tradeList.filter(item => {
        return item.id[0] === '6' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const junTotalProfits = junProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const julProfits = props.tradeList.filter(item => {
        return item.id[0] === '7' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const julTotalProfits = julProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const augProfits = props.tradeList.filter(item => {
        return item.id[0] === '8' && item.id.slice(5,9) === '2021'
    })
    const augTotalProfits = augProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const sepProfits = props.tradeList.filter(item => {
        return item.id[0] === '9' && item.id.slice(5,9) === newDate.getFullYear()
    })
    const sepTotalProfits = sepProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const octProfits = props.tradeList.filter(item => {
        return item.id.slice(0,1) === '10' && item.id.slice(6,10) === newDate.getFullYear()
    })
    const octTotalProfits = octProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const novProfits = props.tradeList.filter(item => {
        return item.id.slice(0,1) === '11' && item.id.slice(6,10) === newDate.getFullYear()
    })
    const novTotalProfits = novProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)
    const decProfits = props.tradeList.filter(item => {
        return item.id.slice(0,1) === '12' && item.id.slice(6,10) === newDate.getFullYear()
    })
    const decTotalProfits = decProfits.map( profit => profit.profitLoss).reduce((acc, item) => (acc += item), 0)

    const profits = [janTotalProfits, febTotalProfits, marTotalProfits, aprTotalProfits, mayTotalProfits, junTotalProfits, julTotalProfits, augTotalProfits, sepTotalProfits, octTotalProfits, novTotalProfits, decTotalProfits]
    

    return(
        <div className='chart'>
            <Line
                data={{
                    labels:monthNames,
                    datasets:[{
                        label:'Total Profit',
                        data:profits,
                        backgroundColor:'rgb(255,255,255)',
                        borderColor:'rgb(51,183,225)',
                        fill:false,    
                        tension:0.1
                    }]
                }} />
        </div>
    )
}

export default Chart;