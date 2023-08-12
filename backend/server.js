
import express from 'express'
const app = express();
import cors from 'cors'
import connectDB from './database/mongoose.js';

import homeRoutes from  './routes/homeRoutes.js'




app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB() 


app.use('/home', homeRoutes)


app.listen(2121, ()=>{
    console.log("server running")
})