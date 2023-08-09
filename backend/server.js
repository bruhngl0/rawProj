
import express from 'express'
const app = express();
import cors from 'cors'
import connectDB from './database/mongoose.js';


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB() 


app.get('/home', (req,res)=> {
    res.send("landing page")
})

app.listen(2121, ()=>{
    console.log("server running")
})