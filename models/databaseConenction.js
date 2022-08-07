import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true , useUnifiedTopology : true}) // we pass that object to remove deprecation warning

 const db = mongoose.connection


db.on('error' , console.error.bind(console, 'Connection Error : ') )

db.on('open' , () => {
    console.log('Connected')
})


export default db