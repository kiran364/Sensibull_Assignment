const stocksController = require('../Controllers/stocksController')
const router = require('express').Router();

// end point to add csv file data to mongodb database
router.post('/', stocksController.addData);

// end point to return a list of current stocks

router.get('/stocks-list', stocksController.getStocksData)

router.post('/quote-list', stocksController.letestQuotes)



module.exports = router;