const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const productRoute = require('./routes/product')

dotenv.config()

// CONNECT DATABASE
mongoose.connect(("mongodb+srv://vanhoa2k2:zetmins012@cluster0.qeos9ar.mongodb.net/?retryWrites=true&w=majority"), ()=> {
    console.log("Connect success")
})

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

//ROUTES
app.use("/v1/product", productRoute)

app.listen(8000, ()=> {
    console.log('Server is running.......')
})