import Product from "../models/productModel.js"

const getProducts = async(req, res) => {
 const data = await Product.find({})
 

 if(data) {
    res.status(200).json(data)
 }else{
    res.status(404).json({message: 'error'})
 }
}


export {getProducts}  