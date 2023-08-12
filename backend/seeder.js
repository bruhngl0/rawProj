import data from './data/products.js'
import mongoose from 'mongoose'
import Product from './models/productModel.js'
import connectDB from './database/mongoose.js'

connectDB()

const importData = async()=> {
   
    try {

        await Product.deleteMany()


        await Product.insertMany(data)
        console.log('imported')
        process.exit()
    } catch (error) {
        console.error('nope')
        process.exit(1)
    }
   
} 


importData();