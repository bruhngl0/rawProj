import mongoose from "mongoose";


const URI = "mongodb+srv://aditya:anonymous0z@cluster0.ql442oy.mongodb.net/"

const connectDB = async()=>{
    try {
        
        await mongoose.connect(URI);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
    };
    
    export default connectDB


