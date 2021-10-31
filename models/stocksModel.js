const mongoose = require('mongoose');


const stocksSchema = new mongoose.Schema({
    Symbol : {
        type: String
    },
    Name: {
        type: String
    },
    Sector: {
        type: String
    },
    Validtill: {
        type: String
    }
},
{timestamps: true});

module.exports = mongoose.model('Stock', stocksSchema);