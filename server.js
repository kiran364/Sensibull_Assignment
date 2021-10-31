const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


//User Routes
const stocksRoute = require('./Routes/stocks.route');

// App Config...
const app = express();                  // instanciating express() in app variable
dotenv.config();                        // to use .env variables
const Port = process.env.Port;

// Middlewares
app.use(express.json());
app.use("/", stocksRoute);



// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));




//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port -- ${Port}`);
})