const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const AuthRouter = require('./routes/AuthRouter')
const ProductRouter = require('./routes/ProductRouter')
const ExpenseRouter = require('./routes/ExpenseRouter');
const ensureAuthenticated = require("./middlewares/Auth");



require('dotenv').config()
require('./models/db')

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)// for any request followed by /auth ex: /auth/login or /auth/signup
app.use('/products', ProductRouter )
app.use('/expenses', ensureAuthenticated, ExpenseRouter)

app.get("/ping", (req, res)=>{
    res.send("Pong");
})
app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${8000}`)
})