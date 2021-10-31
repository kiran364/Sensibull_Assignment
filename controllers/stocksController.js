const Stocks = require('../models/stocksModel')
const fetch = require('node-fetch');
const csvtojson = require("csvtojson");




// insert data from csv to database 
exports.addData = (req, res) => {
    try{
        csvtojson()
        .fromFile("instruments.csv")
        .then( async (csvData) => {
            const saveData = await Stocks.insertMany(csvData);
            if(saveData){
                console.log('record inserted');
                res.status(201).send('Record Inserted in database from csv')
            }       
         // console.log(csvData);
        })
    }catch(err){
        res.status(406).send(err);
    }
}


exports.getStocksData = async (req, res) => {
    try{
        const stocksData = await Stocks.find({},{Symbol: 1, Name: 1, Sector: 1, _id: 0});
        res.status(302).json(stocksData);
    }catch(err){
        res.status(404).json()
    }
}


exports.letestQuotes = async (req, res) => {
    const {symbols} = req.body;
    try{
        // console.log(symbols);
        symbols.forEach( async (symbol) => {
            // console.log(symbols);
            const quotesData = await fetch(`https://prototype.sbulltech.com/api/v2/quotes/${symbol}`)
            const result = await quotesData.json();
            // console.log(result.payload)
            // let data = result.payload.sort((a, b)=>{
            //     return b.time - a.time
            // })
            // res.status(200).json(data)
            res.status(200).json(result.payload);
           
        })
    }catch(err){

    }
}

