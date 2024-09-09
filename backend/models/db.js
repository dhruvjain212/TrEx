const mongoose = require('mongoose')

//const mongo_url  = process.env.MONGO_CONN;
const mongo_url = "mongodb://127.0.0.1:27017/blogify"

mongoose.connect(mongo_url).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log('MongoDB connection error', err)
})