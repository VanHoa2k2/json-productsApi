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
mongoose.connect(("mongodb+srv://vanhoa2k2:zetmins012@cluster0.ev8zd0x.mongodb.net/?retryWrites=true&w=majority"), ()=> {
    console.log("Connect success")
})

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

//PUBLIC
app.use(express.static('public'))
//ROUTES
app.use("/json_CayCanh", productRoute)

app.listen(5000, ()=> {
    console.log('Server is running.......')
})