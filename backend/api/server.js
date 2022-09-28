const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello')
})

server.get('/trades', async (req, res) => {
    try{
        const trades = await db('trades')
        res.json(trades)
    }catch(err){
        console.log(err)
    }
    
})

server.get('/trades/:id', async (req,res) => {
    const id = req.params
    try{
        const trade = await db('trades').where(id)
        trade.length === 0 ? res.status(404).json('Trade not found!'): res.status(200).json(trade)
    }catch(err){
        console.log(err)
    }
});

server.post('/trades', async (req, res) => {
    const trade = req.body
    const trades = await db('trades')
    if(!trade){
        console.log(trade)
        return res.status(400).json('Must include trade data')
    }
    try{
        await db('trades').insert(trade)
        res.status(201).json('Trade added')
    }catch(err){
        console.log(err)
    }
})



server.delete('/trades/:id', async (req, res) => {
    const { id } = req.params
    try{
        await db('trades').where({ id }).del()
        res.status(200).json('Trade Deleted!')
    }catch(err){
        console.log(err)
    }
})

module.exports = server;